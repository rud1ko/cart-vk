import {useSelectorCartProductsSum} from "../../shared/hooks/useSelectorCartProductsSum";
import {useSelectorEveryProduct} from "../../shared/hooks/useSelectorEveryProduct";
import {Div, Panel, Title, View} from "@vkontakte/vkui";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";
import CartItem from "../../entities/CartItem/CartItem";
import React, {JSX} from "react";
import styles from './Cart.module.css'

const Cart = (): JSX.Element => {
    const productSum = useSelectorCartProductsSum()
    const cartList = useSelectorEveryProduct();
    return (
        <View activePanel={"fixedLayout"}>
            <Panel id="fixedLayout">
                <Div className={styles.fixedLayout}>
                    <Div id="nav">
                        <Title weight={"1"}>{`Итого: ${productSum} руб.`}</Title>
                    </Div>
                    <Div id={"products"} className={styles.cartList}>
                        {cartList.map((product: CardProductsProps)=> {
                            return <CartItem key={product.id} product={product}/>
                        })}
                    </Div>
                </Div>
            </Panel>
        </View>
    )
};

export default Cart