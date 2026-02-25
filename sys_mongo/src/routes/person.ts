import express, { Router } from 'express';
import Person from '../models/Person.ts';

const router: Router = express.Router();

router
    .get('/', async (req, res) => {
        try {
            const person = await Person.find();
            res.status(200).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pessoas', error });
        }
    })


    .post('/register', async (req, res) => {
        const { name, lastname, age } = req.body;

        try {
            const person = new Person({ name, lastname, age });
            await person.save();
            res.status(201).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar pessoa', error });
        }
    })

export default router;
