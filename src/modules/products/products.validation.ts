import { z } from "zod";

// sub-schema for variants
const variantsValidationsSchema = z.object({
    type: z.string().optional(), 
    value: z.string().optional(), 
  });
  
  // sub-schema for inventory
  const inventoryValidationsSchema = z.object({
    quantity: z.number().int().min(0), 
    inStock: z.boolean().default(true), 
  });
  
  // Main schema for products
  const productsValidationsSchema = z.object({
    name: z.string().min(1, { message: 'Product name is required' }), 
    description: z.string().min(1, { message: 'Product Description is required' }), 
    price: z.number().positive('Price must be a positive number').min(1, { message: 'Price is required' }), 
    category: z.string().min(1, { message: 'Product category is required' }), 
    tags: z.array(z.string()).optional(), 
    variants: z.array(variantsValidationsSchema).optional(), 
    inventory: inventoryValidationsSchema, 
  });

  export default productsValidationsSchema;