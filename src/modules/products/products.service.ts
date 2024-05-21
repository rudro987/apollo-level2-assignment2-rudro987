import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const createProductInDB = async (productData: TProducts) => {
    const result = await Products.create(productData);
    return result;
}

const getAllProductsFromDB = async () => {
    const result = await Products.find();
    return result;
}

const getSingleProductFromDB = async (id: string) => {
    const result = await Products.findById(id);
    return result;
}

const updateSingleProductInDB = async (id: string, productData: TProducts) => {
    const result = await Products.findByIdAndUpdate(id, productData,{ new: true });
    return result;
}

const deleteSingleProductFromDB = async (id: string) => {
    const result = await Products.findByIdAndDelete(id, {new: true});
    return result;
}

export const ProductsService = {
    createProductInDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateSingleProductInDB,
    deleteSingleProductFromDB
}