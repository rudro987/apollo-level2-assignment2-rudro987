import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const createProduct = async (productData: TProducts) => {
    const result = await Products.create(productData);
    return result;
}

export const ProductsService = {
    createProduct,
}