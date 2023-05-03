import { memo } from "react";

import { Route, Routes } from "react-router-dom";

import MainPage from "@pages/MainPage/MainPage";

import AppTemplate from "@templates/AppTemplate";

import { ROUTES } from "@constants/routes";

const AppRoutes = () => (
    <Routes>
        <Route element={<AppTemplate />}>
            <Route path={ROUTES.MAIN} element={<MainPage />} />
        </Route>
    </Routes>
);

export default memo(AppRoutes);
