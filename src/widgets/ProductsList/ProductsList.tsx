import {useGetProductsQuery} from "../../shared/services/CardProductsAPI";
import {Div, Panel, Spinner, View} from "@vkontakte/vkui";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";
import CardProducts from "../../entities/CardDirectory/CardProducts";
import React, {JSX} from "react";
import styles from './ProductsList.module.css'

const ProductsList = (): JSX.Element => {
    const {data, isLoading, isError} = useGetProductsQuery()
    if (isLoading) return <div className={styles.loadBlock}><Spinner size={"large"}/></div>
    if (!data || isError) return <div>Not Found</div>
    return (
        <View activePanel={"products"}>
            <Panel id={"products"}>
                <Div id="cardsBlock" className={styles.productsListBlock}>
                    {data.map((product: CardProductsProps) => {
                        return <CardProducts
                            key={product.id}
                            product={product}/>
                    })}
                </Div>
            </Panel>
        </View>
    );
}

export default ProductsList