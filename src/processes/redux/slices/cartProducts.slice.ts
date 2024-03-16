import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardProductsProps} from "../../../entities/CardDirectory/CardProducts.props";

const initialState: CardProductsProps[] = []

export const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        incrementProduct: (state , {payload: product}: PayloadAction<CardProductsProps>) => {
            const quantityProductsLikeOur = state.filter(pr => pr.id === product.id)
            if (quantityProductsLikeOur.length === 10) return
            else {
                state.push(product)
            }
        },
        decrementProduct: (state, {payload: product}: PayloadAction<CardProductsProps>) => {
            const isExist = state.some(pr => pr.id === product.id)
            if (isExist) {
                const index = state.findIndex(pr => pr.id === product.id)
                if (index !== -1){
                    state.splice(index, 1)
                }
            }
        },
        resetProduct: (state, {payload: product}: PayloadAction<CardProductsProps>) => {
            return state.filter(pr => pr.id !== product.id)
        }
    }
})

export const {actions, reducer} = cartProductsSlice