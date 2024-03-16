export interface CardProductsProps{
    id: number
    image: string,
    title: string,
    description: string,
    rating: {
        count: number
    }
    price: number
}