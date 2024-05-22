import mongoose, { Schema, model } from 'mongoose'
import { TOrders } from './orders.interface'
import { Products } from '../products/products.model'
const { ObjectId } = mongoose.Types

const OrdersSchema = new Schema<TOrders>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  productId: {
    type: String,
    required: [true, 'Product id is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
})

OrdersSchema.pre('save', async function (next) {
  try {
    if (!ObjectId.isValid(this.productId)) {
      return next(new Error('Order not found'))
    }
    // Find the product associated with the order
    const product = await Products.findOne({ _id: this.productId })

    if (!product) {
      return next(new Error('Order not found'))
    }

    // Check if the product quantity is sufficient
    if (this.quantity > product.inventory.quantity) {
      return next(new Error('Insufficient quantity available in inventory'))
    }

    // Reduce the product quantity
    if (product.inventory.quantity - this.quantity === 0) {
      product.inventory.quantity -= this.quantity
      product.inventory.inStock = false
      await product.save()
    } else {
      product.inventory.quantity -= this.quantity
      await product.save()
    }

    next()
  } catch (error) {
    console.error(error)
  }
})

export const Orders = model<TOrders>('Order', OrdersSchema)
