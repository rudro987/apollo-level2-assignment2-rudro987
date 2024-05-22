import { z } from "zod";

// validations schema for orders
const orderValidationsSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }), 
    productId: z.string().min(1, { message: 'Product Id Description is required' }), 
    price: z.number().positive('Price must be a positive number').min(1, { message: 'Price is required' }), 
    quantity: z.number().positive('Quantity must be a positive number').min(1, { message: 'Quantity is required' }),  
    
  });

  export default orderValidationsSchema;