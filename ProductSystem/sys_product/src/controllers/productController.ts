import { NextFunction, Request, Response } from "express";
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
                return res.status(200).send({ message: "There is no registered product." });
            }

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
                category
            } = req.body;

            const product = await Product.create({name, description, price, stock, category});

            return res.status(200).send({ response: "Product register sucessfully!", product: product })
        }
        catch (error) {
            return res.status(500).send({ message: "server error", error });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const product = await Product.findById(id);

            if (!product) {
                return res.status(404).send({ response: "Product not found!"})
            }

            return res.status(200).send({ product})
        }
        catch (error){
            return res.status(500).send({ message: "server error", error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                name,
                description,
                price,
                stock,
                category
            } = req.body;

            const product = await Product.findByIdAndUpdate(id, {name, description, price, stock, category}, { new: true })

            if(!product) {
                return res.status(404).send({ massage: "Product not found! "})
            }

            return res.status(200).send({ response: "Product update sucessfully!", product: product })
        }
        catch (error) {
            return res.status(500).send({ message: "server error", error });
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const deleted = await Product.findByIdAndDelete(id);

            if (!deleted) {
                return res.status(404).send({ message: "Product not found!" })
            }

            return res.status(200).send({ message: "Product delete sucessfully!" })
        }
        catch (error) {
            return res.status(500).send({ message: "Server error.", error})
        }
    }
}

export default productController;