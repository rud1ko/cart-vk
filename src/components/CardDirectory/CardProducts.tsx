import React, {JSX} from 'react';
import styles from './CardProducts.module.css'
import {CardProductsProps} from "./CardProducts.props";
import cn from 'classnames'
import {Image} from "@vkontakte/vkui";

const CardProducts = ({image, title, description, rating, price, className, ...props}: CardProductsProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className)} {...props}>
            <img src={image} alt={"Product image"} className={styles.productImage}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>{`Количество - ${rating.count}. Цена - ${price}`}</span>
        </div>
    );
};

export default CardProducts;