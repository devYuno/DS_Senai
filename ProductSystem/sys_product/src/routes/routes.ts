import { Express } from "express";
import express from "express";
import productController from "../controllers/productController.ts";

export default (app: Express) => {
    app
        .use(express.json())
}