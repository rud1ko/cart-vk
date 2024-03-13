import {configureStore} from "@reduxjs/toolkit";
import CardProducts from "../components/CardDirectory/CardProducts";
import {CardProductsAPI} from "./services/CardProductsAPI";

export const store = configureStore({
    reducer: {
        [CardProductsAPI.reducerPath]: CardProductsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CardProductsAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})