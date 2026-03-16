import express, { Router } from "express";
import productController from "../controllers/productController.ts";
import { validateProductCreate, validateProductValues } from "../middlewares/productMiddleware.ts";

const router: Router = express.Router();

router
    .get('/', productController.findAll)
    .post('/', validateProductCreate, validateProductValues, productController.create)