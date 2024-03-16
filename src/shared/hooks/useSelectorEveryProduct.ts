import {useSelector} from "react-redux";
import {RootState} from "../../processes/redux/store";
import {CardProductsProps} from "../../entities/CardDirectory/CardProducts.props";

export const useSelectorEveryProduct = () => {
    let set: Set<CardProductsProps> = new Set()
    const cart:CardProductsProps[] = useSelector((state: RootState) => state.Cart)
    cart.forEach((el: CardProductsProps) => set.add(el))
    return Array.from(set)
}