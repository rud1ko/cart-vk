import {useSelector} from "react-redux";
import {RootState} from "../../processes/redux/store";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";

export const useSelectorAllSumProduct = (product: CardProductsProps) => {
    let count = 0
    const cart = useSelector((state: RootState) => state.Cart)
    cart.forEach(pr =>{
        if ( pr.id === product.id){
            count += product.price
        }
    })
    return count
}