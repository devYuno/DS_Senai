import express, {Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.body 
        console.log(nome, sobrenome)
        people.push({nome, sobrenome})
        res.status(200).send({ message: `Usuário ${nome} ${sobrenome} cadastrado com sucesso!`})
    })
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({ users: people })
    })

export default router;