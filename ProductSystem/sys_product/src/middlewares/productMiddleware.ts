import { Request, Response, NextFunction } from "express";

export const validateProductCreate = ( req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body;
    
    if( !name || !price ) {
        return res.status(400).send({ response: "Name and price cannot be null"})
    }

    next();
}

export const validateProductValues = (req: Request, res: Response, next: NextFunction) => {
    const { price, stock } = req.body;

    if (price < 0) {
        return res.status(400).send({ response: "Price cannot be negative." });
    }

    if (stock < 0) {
        return res.status(400).send({ response: "Stock cannot be negative." });
    }

    next();
}
