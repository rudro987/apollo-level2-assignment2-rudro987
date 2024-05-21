import { TInventory, TProducts, TVariants } from './products.interface'
import { Schema, model } from 'mongoose'

//sub-schema for variants types
const VariantsSchema = new Schema<TVariants>({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
})

//sub-schema for inventory

const InventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

//main schema

const ProductsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },

  description: {
    type: String,
    required: [true, 'Product Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: {
    type: [String],
  },
  variants: [VariantsSchema],
  inventory: InventorySchema,
})

export const Products = model<TProducts>('Product', ProductsSchema)
