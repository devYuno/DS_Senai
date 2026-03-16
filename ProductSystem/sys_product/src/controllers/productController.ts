import { Request, Response } from "express";
import Product from "../models/Product.ts";

class productController {
    static async findAll(req: Request, res: Response) {
        try {
            const { name, category, minPrice, maxPrice, inStock } = req.query;

            let filter: any = {};

            if (name) {
                filter.name = { $regex: name, $options: "i" }; // "i" = ignore case
            }

            if (category) {
                filter.category = { $regex: category, $options: "i" };
            }

            if (minPrice || maxPrice) filter.price = {};
            
            if (minPrice) filter.price.$gte = parseFloat(String(minPrice));
            if (maxPrice) filter.price.$lte = parseFloat(String(maxPrice));

            if (inStock !== undefined) {
                filter.inStock = inStock === 'true'; 
            }

            const products = await Product.find(filter);

            if (!products || products.length === 0) {
                return res.status(404).send({ response: "There is no registered product." });
            }

            return res.status(200).send({ products });
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

            return res.status(200).send({ response: "Product register sucessfully!", product: product })
        }
        catch (error) {
            return res.status(500).send({ message: "server error", error });
        }
    }
    
}

export default productController;