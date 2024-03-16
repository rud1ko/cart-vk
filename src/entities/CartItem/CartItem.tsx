import React, {JSX} from "react";
import {useSelectorProductQuantity} from "../../shared/hooks/useSelectorProductQuantity";
import {useSelectorAllSumProduct} from "../../shared/hooks/useSelectorAllSumProduct";
import {Card, Div, Image, Paragraph, Title} from "@vkontakte/vkui";
import styles from './CartItem.module.css'
import {CartItemProps} from "./CartItem.props";

const CartItem = ({product}: CartItemProps): JSX.Element => {
    const quantity = useSelectorProductQuantity(product);
    const sum = useSelectorAllSumProduct(product)
    return (
        <Card>
            <Div>
                <div className={styles.infoCartItem}>
                    <Image src={product.image} size={56}/>
                    <div className={styles.infoCartItemText}>
                        <Paragraph weight={"2"}>
                            {`Количество - ${quantity}`}
                        </Paragraph>
                        <Paragraph weight={"2"}>
                            {`Общая цена - ${sum.toFixed(1)}`}
                        </Paragraph>
                    </div>
                </div>
                <Title weight={"3"}>{product.title}</Title>
            </Div>
        </Card>
    )
}

export default CartItem