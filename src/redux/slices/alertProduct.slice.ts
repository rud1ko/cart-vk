import {createSlice} from "@reduxjs/toolkit";
import {ReactElement} from "react";
import {Alert} from "@vkontakte/vkui";
import {cartProductsSlice} from "./cartProducts.slice";

interface AlertPayload {
    onClose: () => void;
    header: string;
}

interface AlertProductState {
    alert: AlertPayload | null;
}

const initialState: AlertProductState = {
    alert: null,
};

export const alertProductSlice = createSlice({
    name: "alertProduct",
    initialState,
    reducers: {
        openAlert: (state, {payload}: { payload: AlertPayload }) => {
            state.alert = payload
        }
        ,
        close: (state) => {
            state.alert = null;
        }
    }
})

export const {actions, reducer} = alertProductSlice