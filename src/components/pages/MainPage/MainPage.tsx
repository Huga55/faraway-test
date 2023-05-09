import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { useQueryParams } from "use-query-params";

import CharacterCard from "@molecules/CharacterCard/CharacterCard";
import Input from "@molecules/Input";

import Loader from "@atoms/Loader";
import Pagination from "@atoms/Pagination";
import Typography from "@atoms/Typography/Typography";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    setlectCharacters,
    setlectIsCharactersLoading,
} from "@store/slices/character/character.selectors";
import { getCharacters } from "@store/slices/character/character.thunk";

import useMedia from "@hooks/useMedia";

import { ROUTES } from "@constants/routes";

import {
    charactersPerPage,
    mainNameFilterParam,
    mainPageParam,
    pageDefault,
} from "./MainPage.constants";
import styles from "./MainPage.module.scss";

const MainPage = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { isMobile } = useMedia();

    const charactersList = useAppSelector(setlectCharacters);
    const isLoading = useAppSelector(setlectIsCharactersLoading);

    const [queryParams, setQueryParams] = useQueryParams({
        page: mainPageParam,
        name: mainNameFilterParam,
    });

    const pageParam = queryParams.page;
    const nameParam = queryParams.name;

    const [nameField, setNameField] = useState(nameParam);

    const onChangeNameFilterDebounced = useDebouncedCallback(
        (name: string) => setQueryParams({ name: name || undefined, page: pageDefault }),
        500,
    );

    const getCharacterInfo = useCallback((id: string) => navigate(`${ROUTES.CHARACTER}/${id}`), [
        navigate,
    ]);

    const onPageChangeHandler = useCallback(
        (_: ChangeEvent<unknown>, page: number) => setQueryParams({ page }),
        [setQueryParams],
    );

    const onChangeNameFieldHandler = useCallback(
        ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setNameField(value);
            onChangeNameFilterDebounced(value);
        },
        [onChangeNameFilterDebounced],
    );

    useEffect(() => {
        dispatch(
            getCharacters({
                page: pageParam,
                search: nameParam,
            }),
        );
    }, [dispatch, nameParam, pageParam]);

    useCallback(() => {
        setNameField(nameParam);
    }, [nameParam]);

    const { count, results: characters } = charactersList || {};

    const pagesAmount = count ? Math.ceil(count / charactersPerPage) : 1;

    return (
        <div className={styles.wrapper}>
            {isLoading && <Loader />}

            <Typography className={styles.title} variant={isMobile ? "h5" : "h4"}>
                Star Wars Characters
            </Typography>

            <Input
                labelClassName={styles.field}
                label="Search by name"
                value={nameField}
                onChange={onChangeNameFieldHandler}
                variant="standard"
            />

            {!!characters?.length && (
                <div className={styles.cards}>
                    {characters.map((card) => (
                        <CharacterCard key={card.name} data={card} onGetInfo={getCharacterInfo} />
                    ))}
                </div>
            )}

            {!characters?.length && nameParam && (
                <Typography variant={isMobile ? "h5" : "h4"}>
                    Not found with your filters
                </Typography>
            )}

            {pagesAmount > 1 && (
                <div className={styles.pagination}>
                    <Pagination
                        {...(isMobile && { siblingCount: 0 })}
                        page={pageParam}
                        variant="outlined"
                        count={pagesAmount}
                        onChange={onPageChangeHandler}
                    />
                </div>
            )}
        </div>
    );
};

export default memo(MainPage);
