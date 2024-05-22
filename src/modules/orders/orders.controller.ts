import { Request, Response } from 'express'
import { OrdersService } from './orders.service'
import orderValidationsSchema from './orders.validation'
import { ZodError } from 'zod'

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = orderValidationsSchema.parse(req.body)
    const result = await OrdersService.createNewOrderInDB(validatedData)
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: error.errors[0].message,
      })
    } else if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    } else {
      res.status(500).json({
        success: false,
        message: 'Order creation failed',
        error,
      })
    }
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await OrdersService.getAllOrdersFromDB(email as string)
    if (email) {
      return res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Orders fetching failed!',
      error: error,
    })
  }
}

export const OrdersController = {
  createNewOrder,
  getAllOrders,
}
