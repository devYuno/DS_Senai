import { NextFunction, Request, Response } from "express";

export const validateUserRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password ) {
        return res.status(400).send({ response: "Todos os dados são necessários."})
    }

    next()
}

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password ) {
        return res.status(400).send({ response: "Todos os dados são necessários."})
    }

    next()
}