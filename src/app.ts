import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './modules/products/products.route';

const app : Application = express();

//parsers

app.use(express.json())
app.use(cors())

//routes

app.use('/api/products', ProductsRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send("Appolo level-2 assignment 2 server!")
});

export default app;