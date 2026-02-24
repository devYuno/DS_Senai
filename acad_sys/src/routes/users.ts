import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface user {
    id: number;
    name: string;
    email: string;
    type: string;
    active: boolean;
    createdAt: Date;
}

const nextId = 0;

const users: user[] = []

router
    .get('/', (req, res) => {
        if (users.length == 0) {
            res.status(404).send({ response: "No registered users found." })
        }
        else {
            res.status(200).send({ users: users })
        }
    })
    .get('/:id', (req, res) => {
        const { id } = req.params
        let convertId = Number(id)
        const query = users.find(u => u.id === convertId)
        if (query) {
            res.status(200).send({ user: query })
        }
        else {
            res.status(404).send({ response: "User not found!" })
        }
    })
    .post('/register', (req, res) => {
        const {
            name,
            email,
            type
        } = req.body

        let id = nextId;
        let active = true;
        let createdAt = new Date();

        users.push({ id, name, email, type, active, createdAt })
        res.status(201).send({ message: "User registered successfully!" })
    })

export default router;
