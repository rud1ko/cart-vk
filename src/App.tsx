import React, {JSX} from 'react';
import './App.css';
import {
    Alert,
    AppRoot,
    SplitCol,
    SplitLayout,
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import {useSelector} from "react-redux";
import {RootState} from "./processes/redux/store";
import ProductsList from "./widgets/ProductsList/ProductsList";
import Cart from "./widgets/Cart/Cart";



function App(): JSX.Element {
    const alert = useSelector((state: RootState) => state.Alert.alert);

  return (
      <AppRoot>
          <SplitLayout className="App" popout={alert && <Alert onClose={alert.onClose} header={alert.header}/>}>
              <SplitCol width={"100%"}>
                  <ProductsList/>
              </SplitCol>
              <SplitCol className="sumColumn" width={"100%"}>
                <Cart/>
              </SplitCol>
          </SplitLayout>
      </AppRoot>
  );
}

export default App;
