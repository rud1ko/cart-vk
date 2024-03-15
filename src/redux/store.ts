import {configureStore} from "@reduxjs/toolkit";
import {CardProductsAPI} from "./services/CardProductsAPI";
import {reducer as alertReducer} from "./slices/alertProduct.slice"
import {reducer as cartReducer} from "./slices/cartProducts.slice"

export const store = configureStore({
    reducer: {
        Cart: cartReducer,
        Alert: alertReducer,
        [CardProductsAPI.reducerPath]: CardProductsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CardProductsAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
