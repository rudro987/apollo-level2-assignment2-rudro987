import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './modules/products/products.route'
import { OrdersRoutes } from './modules/orders/orders.route'
import { errorHandler } from './modules/orders/errorHandler'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

//routes
app.use('/api/products', ProductsRoutes)
app.use('/api/orders', OrdersRoutes)

app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  next(error);
});

app.use(errorHandler);





app.get('/', (req: Request, res: Response) => {
  res.send('Appolo level-2 assignment 2 server!')
})

export default app
