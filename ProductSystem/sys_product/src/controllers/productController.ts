import { Request, Response } from "express";
import Product from "../models/Product.ts";

class productController {
    static async findAll(req: Request, res: Response) {
        try {
            const products = await Product.find();

            if (!products) {
                return res.status(404).send({ response: "There is no registered product." });
            }

            const { name, category, minPrice, maxPrice, inStock } = req.query;

            

            return res.status(200).send({ products: products });
        }
        catch (error) {
            return res.status(500).send({ message: "server error", error });
        }
    }
    static async create(req: Request, res: Response) {
        try {
            const {
                name,
                description,
                price,
                stock,
                category,
                createdAt
            } = req.body;

            const product = {
                name,
                description,
                price,
                stock,
                category,
                createdAt
            }

            await Product.create(product);
            
            return res.status(200).send({ response: "Product register sucessfully!", product: product})
        }
        catch (error) {

        }
    }
}

export default productController;