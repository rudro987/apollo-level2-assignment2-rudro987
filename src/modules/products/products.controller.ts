import { Request, Response } from "express";
import { ProductsService } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const result = ProductsService.createProduct(req.body);
        res.status(201).json({
            success: true,
            "message": "Product created successfully!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product creation failed',
            error: error
        });
    }
}

export const ProductsController = {
    createProduct,
}