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
    const { searchTerm } = req.query;
    const result = await ProductsService.getAllProductsFromDB(searchTerm as string)
    if(searchTerm){
        res.status(200).json({
            success: true,
            message: `Products matching search term ${searchTerm} fetched`,
            data: result,
          })
    }
    res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(req.body);
    
    const result = await ProductsService.updateSingleProductInDB(productId, req.body)
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product updating failed',
      error: error,
    })
  }
}

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductsService.deleteSingleProductFromDB(productId);
    if(!result){
        return res.status(404).json({
            success: false,
            message: 'Product not found',
            data: null,
          })
    };
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product deleting failed',
      error: error,
    })
  }
}

export const ProductsController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
}
