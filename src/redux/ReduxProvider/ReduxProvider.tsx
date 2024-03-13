import React, {JSX} from "react";
import {IReduxProvider} from "./ReduxProvider.props";
import {Provider} from "react-redux";
import {store} from "../store";

const ReduxProvider = ({children}: IReduxProvider): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
};

export default ReduxProvider;