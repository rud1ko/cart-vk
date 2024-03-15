import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {CardProductsProps} from "../components/CardDirectory/CardProducts.props";

export const useSelectorCartProductsSum = () => {
    const cart: CardProductsProps[] = useSelector((state: RootState) => state.Cart)
    let count: number = 0
    cart.map((product: CardProductsProps) => {
        count += product.price
    })
    return count.toFixed(1);
}