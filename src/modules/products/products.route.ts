import express from 'express'
import { ProductsController } from './products.controller';

const router = express.Router();

router.post('/', ProductsController.createProduct);

export const ProductsRoutes = router;