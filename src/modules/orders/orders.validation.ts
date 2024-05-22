import { z } from 'zod'

// validations schema for orders
const orderValidationsSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z.string().min(1, { message: 'Product Id Description is required' }),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().positive('Quantity must be a positive number'),
})

export default orderValidationsSchema
