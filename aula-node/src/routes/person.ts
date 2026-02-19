import express, {Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
   .get('/', (req, res) => {
        res.status(200).send({response: "person funcionando!"})
    })
    .post('/registrar', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.body 
        console.log(nome, sobrenome)
        people.push({nome, sobrenome})
        res.status(200).send({ message: `Usuário ${nome} ${sobrenome} cadastrado com sucesso!`})
    })
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({ users: people })
    })
    .get('/usuarios/:id', (req, res) => {
        const { id } = req.params
        // res.status(200).send({ response: id })
        let convertId = Number(id)
        res.status(200).send({ response: people[convertId] })
    })
    .get('/filtro', (req, res) => {
        const { nome, sobrenome } = req.query
        res.status(200).send({ response: `${nome} ${sobrenome}` })
    })

    .put('/atualizar/:id', (req, res) => {
        const { id } = req.params
        const { nome, sobrenome } = req.body
        res.status(200).send({ response: `Atualizando o usuário ${id} -> ${nome} ${sobrenome}`})
    })
    .patch('/atualizar/:id', (req, res) => {
        const { id } = req.params
        const { nome } = req.body
        res.status(200).send({ response: `Atualizando o usuário ${id} -> ${nome}`})
    })

    .delete('/delete/:id', (req, res) => {
        const { id } = req.params
        res.status
    })

export default router;