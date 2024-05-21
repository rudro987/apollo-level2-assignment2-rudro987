import { Request, Response } from 'express'
import { ProductsService } from './products.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductsService.createProductInDB(req.body)
    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product creation failed',
      error: error,
    })
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductsService.getAllProductsFromDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product fetching failed',
      error: error,
    })
  }
}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductsService.getSingleProductFromDB(productId)
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product fetching failed',
      error: error,
    })
  }
}

export const ProductsController = {
  createProduct,
  getAllProducts,
  getSingleProduct
}
