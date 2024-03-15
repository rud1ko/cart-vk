import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {CardProductsProps} from "../components/CardDirectory/CardProducts.props";


export const useSelectorProductQuantity = (product: CardProductsProps) => {
    const cart = useSelector((state: RootState) => state.Cart)
    return cart.filter(pr => pr.id === product.id).length
}