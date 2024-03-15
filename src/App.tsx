import React, {JSX, ReactElement, useEffect} from 'react';
import './App.css';
import {useGetProductsQuery} from "./redux/services/CardProductsAPI";
import {CardProductsProps} from "./components/CardDirectory/CardProducts.props";
import CardProducts from "./components/CardDirectory/CardProducts";
import {
    Alert,
    AppRoot, Div, FixedLayout,
    Group,
    Header,
    Panel,
    PanelHeader,
    SimpleCell, Spinner,
    SplitCol,
    SplitLayout,
    usePlatform,
    View
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {useSelectorCartProductsSum} from "./hooks/useSelectorCartProductsSum";



function App(): JSX.Element {
    const platform = usePlatform()
    const alert = useSelector((state: RootState) => state.Alert.alert);

  return (
      <AppRoot>
          <SplitLayout className="App" popout={alert && <Alert onClose={alert.onClose} header={alert.header}/>}>
              <SplitCol width={"100%"}>
                  <View activePanel={"products"}>
                      <Panel id={"products"}>
                          <ProductsList/>
                      </Panel>
                  </View>
              </SplitCol>
              <SplitCol className="sumColumn" width={280}>
                <Sum/>
              </SplitCol>
          </SplitLayout>
      </AppRoot>
  );
}

const ProductsList = () => {
    const {data, isLoading, isError} = useGetProductsQuery()
    if (isLoading) return <div className="loadBlock"><Spinner size={"large"}/></div>
    if (!data || isError) return <div>Not Found</div>
    return (
        <Div id="cardsBlock" className="productsListBlock">
            {data.map((product: CardProductsProps) => {
                return <CardProducts
                    key={product.id}
                    product={product}/>
            })}
        </Div>
    );
}

const Sum = () => {
    const productSum = useSelectorCartProductsSum()
    return (
        <View activePanel={"fixedLayout"}>
            <Panel id="fixedLayout">
                <FixedLayout vertical={"top"} filled>
                    <Div id="nav" className="sumBlock">
                        {`Итого: ${productSum} руб.`}
                    </Div>
                </FixedLayout>
            </Panel>
        </View>
    )
};

export default App;
