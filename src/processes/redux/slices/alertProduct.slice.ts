import {createSlice} from "@reduxjs/toolkit";
import {AlertPayload} from "../../../shared/interfaces/AlertPayload.props";
import {AlertProductState} from "../../../shared/interfaces/AlertProductState";


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