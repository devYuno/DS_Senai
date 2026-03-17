import express, { Router } from "express";
import productController from "../controllers/productController.ts";
import { validateProductCreate, validateProductValues } from "../middlewares/productMiddleware.ts";

const router: Router = express.Router();

router
    .get('/', productController.findAll)
    .get('/:id', productController.findById)
    .post('/', validateProductCreate, validateProductValues, productController.create)
    .put('/:id', validateProductCreate, validateProductValues, productController.update)
    .delete('/:id', productController.remove)

export default router;    