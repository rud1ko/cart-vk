import React, {JSX, ReactElement, useEffect} from 'react';
import styles from './CardProducts.module.css'
import cn from 'classnames'
import {Alert, AspectRatio, Button, Card, Div, Headline, Image, Paragraph, Text, Title} from "@vkontakte/vkui";
import {Icon16ShoppingCartOutline} from '@vkontakte/icons'
import {CardProductsItemProps} from "./CardProductsItem.props";
import {useActions} from "../../hooks/useActions";
import {useSelectorProductQuantity} from "../../hooks/useSelectorProductQuantity";


const CardProducts = ({product}: CardProductsItemProps): JSX.Element => {
    const {
        incrementProduct,
        decrementProduct,
        resetProduct,
        openAlert,
        close
    } = useActions()
    const quantity = useSelectorProductQuantity(product);

    return (
        <Card mode={"shadow"} className={cn(styles.card)}>
            <img src={product.image} alt={"Product image"} className={styles.productImage}/>
            <div className={styles.contentBlock}>
                <Title weight={"1"}>
                    {product.title}
                </Title>
                <Text className={styles.description} weight={"2"}>{product.description}</Text>
                <Paragraph weight={"1"}>{`Количество - ${product.rating.count}`}</Paragraph>
                <Paragraph weight={"1"}>{`Цена - ${product.price}`}</Paragraph>
                <div className={styles.buttonBlock}>
                    <Button onClick={quantity === 10 ? () => openAlert({
                        onClose: () => close(),
                        header: "К сожалению добавить более 10 товаров одного вида нельзя",
                    }) : () => incrementProduct(product)}>+</Button>
                    <Button onClick={() => decrementProduct(product)}>-</Button>
                    <Button onClick={() => resetProduct(product)}>
                        <Icon16ShoppingCartOutline/>
                    </Button>
                </div>
                <Paragraph weight={"1"}>{`Количество товара в карзине - ${quantity}/10`}</Paragraph>
            </div>
        </Card>
    );
};

export default CardProducts;