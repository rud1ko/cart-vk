import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as actionsProducts} from "../../processes/redux/slices/cartProducts.slice";
import {actions as actionsAlert} from "../../processes/redux/slices/alertProduct.slice";

const rootActions = {
    ...actionsProducts, ...actionsAlert
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [actionsProducts, actionsAlert]
    )
}