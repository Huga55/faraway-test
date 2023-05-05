import { memo } from "react";

import { Route, Routes } from "react-router-dom";

import CharacterInfoPage from "@pages/CharacterInfoPage/CharacterInfoPage";
import MainPage from "@pages/MainPage/MainPage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";

import AppTemplate from "@templates/AppTemplate";

import { ROUTES } from "@constants/routes";

const AppRoutes = () => (
    <Routes>
        <Route element={<AppTemplate />}>
            <Route path={ROUTES.MAIN} element={<MainPage />} />
            <Route path={`${ROUTES.CHARACTER}/:id`} element={<CharacterInfoPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
);

export default memo(AppRoutes);
