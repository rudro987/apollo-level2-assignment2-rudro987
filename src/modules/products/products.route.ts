import express from 'express'

const router = express.Router();

router.post('/', ProductControllers.createProduct);

export const ProductsRoutes = router;