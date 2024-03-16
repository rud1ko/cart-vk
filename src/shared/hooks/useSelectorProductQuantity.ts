import {useSelector} from "react-redux";
import {RootState} from "../../processes/redux/store";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";


export const useSelectorProductQuantity = (product: CardProductsProps) => {
    const cart = useSelector((state: RootState) => state.Cart)
    return cart.filter(pr => pr.id === product.id).length
}