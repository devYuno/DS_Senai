import { Express } from "express";
import express from "express";
import product from './product.ts'

export default (app: Express) => {
    app
        .use(express.json())
        .use('/products', product)
}