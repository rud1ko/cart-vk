import {useSelector} from "react-redux";
import {RootState} from "../../processes/redux/store";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";

export const useSelectorCartProductsSum = () => {
    const cart: CardProductsProps[] = useSelector((state: RootState) => state.Cart)
    let count: number = 0
    cart.forEach((product: CardProductsProps) => {
        count += product.price
    })
    return count.toFixed(1);
}