import { TOrders } from './orders.interface'
import { Orders } from './orders.model'

const createNewOrderInDB = async (orderData: TOrders) => {
  const result = await Orders.create(orderData)
  return result
}

const getAllOrdersFromDB = async (email: string) => {
  let query = { }
  if(email){
    query = { email: { $regex: email, $options: 'i' } }
  }
  const result = await Orders.find(query)
  return result
}

export const OrdersService = {
  createNewOrderInDB,
  getAllOrdersFromDB,
}
