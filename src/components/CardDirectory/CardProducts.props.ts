import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string,
    title: string,
    description: string,
    rating: {
        count: number
    }
    price: number
}