import { ThunkAction } from "redux-thunk";

import { Action, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import characterSlice from "./slices/character/character.slice";

const rootReducer = combineReducers({
    character: characterSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, unknown, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export { store };
