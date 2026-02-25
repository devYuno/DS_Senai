import express, { Router } from 'express';

const router: Router = express.Router();

interface user {
    id: number;
    name: string;
    email: string;
    type: string;
    active: boolean;
    createdAt: Date;
}

var nextId = 0;

const users: user[] = []

router
    .get('/', (req, res) => {

        if (users.length == 0) {
            return res.status(404).send({ response: "No registered users found." })
        }

        const { type, active } = req.query;
        let filter = users;

        if (type) {
            filter = filter.filter(u => u.type === type)
        }
        if (active) {
            let isActive = active === "true";
            filter = filter.filter(u => u.active === isActive)
        }

        if (filter.length == 0) {
            return res.status(404).send({ response: "Users not found." })
        }

        return res.status(200).send({ users: filter })
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

        // Valida se o Id é unico, se não for, incrementa. Se for unico, sai do loop.
        let existId = true;
        while (existId) {
            if (users.some(u => u.id === nextId)) {
                nextId++;
            } else {
                existId = false;
            }
        }

        let id = nextId;
        let active = true;
        let createdAt = new Date();
        let emailLower = email.toLowerCase()

        // Validação de email repetido
        if (users.some(u => u.email === emailLower)) {
            return res.status(400).send({ response: "Validation error: This email is already registered." })
        }

        // Validação de nome e email
        if (!name || !email) {
            return res.status(400).send({ response: "Error: Name and email are required." })
        }

        users.push({ id, name, email: emailLower, type, active, createdAt });
        res.status(201).send({ message: "User registered successfully!", user: users.find(u => u.id === id) });
    })

    .put('/updateall/:id', (req, res) => {
        const { id } = req.params;
        const { name, email, type } = req.body;
        const convertId = Number(id);

        if (!name || !email || !type) {
            return res.status(400).send({ response: "Error: all information is required." });
        }

        var user = users.find(u => u.id === convertId);

        if (!user) {
            return res.status(404).send({ response: "User not found!" });
        }

        let emailLower = email.toLowerCase();

        if (users.some(u => u.email === emailLower)) {
            return res.status(400).send({ response: "Validation error: This email is already registered." });
        }

        user.name = name;
        user.email = emailLower;
        user.type = type;     

        return res.status(200).send({ message: "User update successfully!", user: user });
    })

    .patch('/update/:id', (req, res) => {
        const { id } = req.params;
        const { name, email, type } = req.body;
        const convertId = Number(id);

        var user = users.find(u => u.id === convertId);

        if (!user) {
            return res.status(404).send({ response: "User not found!" })
        }

        let emailLower = email.toLowerCase();

        if (users.some(u => u.email === emailLower)) {
            return res.status(400).send({ response: "Validation error: This email is already registered." });
        }

        user.name = name;
        user.email = emailLower;
        user.type = type;

        return res.status(200).send({ message: "User update successfully!", user: user });
    
    })

    .delete('/delete/:id', (req, res) => {
        const { id } = req.params;
        const convertId = Number(id);

        const user = users.find(u => u.id === convertId);

        if (!user) {
            return res.status(404).send({ response: "User not found!" })
        }

        const confirm = users.splice(users.indexOf(user), 1)

        return res.status(200).send({ message: "User deleted successfully!", user: confirm })
    })

export default router;
