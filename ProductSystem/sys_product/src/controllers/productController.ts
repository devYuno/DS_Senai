import { Request, Response } from "express";
import Product from "../models/Product.ts";

class productController {
    static async getProducts( req: Request, res: Response) {
        try {
            const products = await Product.find();

            if (!products) {
                return res.status()
            }

            return res.status(200).send({ products: products })
        }
        catch (error) {
            return res.status(500).send({ message: "server error", error })
        }

    }
}

export default productController;