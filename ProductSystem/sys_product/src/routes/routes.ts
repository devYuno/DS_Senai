import { Express } from "express";
import express from "express";
import product from './product.ts'
import auth from "./auth.ts";

export default (app: Express) => {
    app
        .use(express.json())
        .use('/products', product)
        .use('/auth', auth)
}