import { z } from "zod";

const variantsValidationsSchema = z.object({
    type: z.string().optional(), // 'type' field is optional
    value: z.string().optional(), // 'value' field is optional
  });
  
  // Define the sub-schema for inventory
  const inventoryValidationsSchema = z.object({
    quantity: z.number().int().min(0), // 'quantity' should be an integer and non-negative
    inStock: z.boolean().default(true), // 'inStock' is a boolean
  });
  
  // Define the main schema for products
  const productsValidationsSchema = z.object({
    name: z.string().min(1, { message: 'Product name is required' }), // 'name' is a non-empty string
    description: z.string().min(1, { message: 'Product Description is required' }), // 'description' is a non-empty string
    price: z.number().positive('Price must be a positive number').min(1, { message: 'Price is required' }), // 'price' is a positive number
    category: z.string().min(1, { message: 'Product category is required' }), // 'category' is a non-empty string
    tags: z.array(z.string()).optional(), // 'tags' is an optional array of strings
    variants: z.array(variantsValidationsSchema).optional(), // 'variants' is an optional array of variant objects
    inventory: inventoryValidationsSchema, // 'inventory' is an object following the InventorySchema
  });

  export default productsValidationsSchema;