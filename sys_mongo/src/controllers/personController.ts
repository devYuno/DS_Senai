import { Request, Response } from "express";
import Person from "../models/Person.ts";

class personController {
    static async getUsers( req: Request, res: Response ) {
        const users = await Person.find();

        return res.status(200).send({ response: users });
    }

    static async getUserById( req: Request, res: Response ) {
        const { id } = req.params;
        const user = await Person.findById(id);

        return res.status(200).send({ response: user });
    }

    static async createUser( req: Request, res: Response ) {
        const {
            name,
            lastname,
            age
        } = req.body;

        const user = { name, lastname, age };
        await Person.create(user);

        return res.status(200).send({ response: "User register sucessfully!", user: user });
    }

    static async updateUser( req: Request, res: Response ) {
        const { id } = req.params;
        const {
            name,
            lastname,
            age
        } = req.body;

        const userUpdate = await Person.findByIdAndUpdate(id, { name, lastname, age }, {new: true});

        return res.status(200).send({ response: "User update sucessfully!", user: userUpdate });
    }

    static async deleteUser( req: Request, res: Response ) {
        const { id } = req.params;

        await Person.findByIdAndDelete( id );

        return res.status(200).send({ response: "User delete sucessfully!" });
    }
}

export default personController;