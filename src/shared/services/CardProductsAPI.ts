import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";

export const CardProductsAPI = createApi({
    reducerPath: "CardproductsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/products"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<CardProductsProps[], void>({query: ()=> '' }),
    })
})

export const {useGetProductsQuery} = CardProductsAPI