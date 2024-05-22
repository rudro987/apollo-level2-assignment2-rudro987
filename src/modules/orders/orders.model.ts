import { Schema, model } from 'mongoose'
import { TOrders } from './orders.interface'

const OrdersSchema = new Schema<TOrders>({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    productId: {
        type: String,
        required: [true, 'Product id is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
});

export const Orders = model<TOrders>('Order', OrdersSchema);