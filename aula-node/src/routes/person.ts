// import express, {Request, Response, Router } from 'express';

// const router: Router = express.Router();
// const people: object[] = [];

// router
//    .get('/', (req, res) => {
//         res.status(200).send({response: "person funcionando!"})
//     })
//     .post('/registrar', (req: Request, res: Response) => {
//         const { nome, sobrenome } = req.body 
//         console.log(nome, sobrenome)
//         people.push({nome, sobrenome})
//         res.status(200).send({ message: `Usuário ${nome} ${sobrenome} cadastrado com sucesso!`})
//     })
//     .get('/usuarios', (req: Request, res: Response) => {
//         res.status(200).send({ users: people })
//     })
//     .get('/usuarios/:id', (req, res) => {
//         const { id } = req.params
//         // res.status(200).send({ response: id })
//         let convertId = Number(id)
//         res.status(200).send({ response: people[convertId] })
//     })
//     .get('/filtro', (req, res) => {
//         const { nome, sobrenome } = req.query
//         res.status(200).send({ response: `${nome} ${sobrenome}` })
//     })

//     .put('/atualizar/:id', (req, res) => {  // atualiza todos os dados 
//         const { id } = req.params
//         const { nome, sobrenome } = req.body
//         res.status(200).send({ response: `Atualizando o usuário ${id} -> ${nome} ${sobrenome}`})
//     })
//     // .patch('/atualizar/:id', (req, res) => {  // atualiza só um dos dados
//     //     const { id } = req.params
//     //     const { nome } = req.body
//     //     res.status(200).send({ response: `Atualizando o usuário ${id} -> ${nome}`})
//     // })

//     .delete('/delete/:id', (req, res) => {
//         const { id } = req.params
//         const { nome } = req.body
//         res.status(200).send({ response: `Usuário ${nome} deletado!`})
//     })

// export default router;


import express, { Request, response, Response, Router } from 'express';

interface Person {
    name: string
    lastName: string
    id: number
}

const router: Router = express.Router();
const people: Person[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const { id, name, lastName } = req.body
        console.log(id, name, lastName)
        people.push({id, name, lastName})
        res.status(200).send("Registrado com sucesso!")
    })
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({ users: people })
    })
    .get('/users/:id', (req: Request, res: Response) => {
        const {id} = req.params
        let convertedId = Number(id)
        let mano = people.find(person => person.id === convertedId)
        console.log(mano)
        res.status(200).send(`Buscando usuário  ${{mano}}`)
    })
    .get('/filter', (req: Request, res: Response) => {
        const { name, lastName } = req.query
        res.status(200).send({ name: name, lastName})
    })
    .put('/update/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { name, lastName } = req.body

        let convertedId = Number(id)
        let user = people.find(person => person.id === convertedId)

        if(!user){
            return res.status(404).send({ response: "Usuario nao encontrado"})
        }

        
        user.id = convertedId
        user.name = name
        user.lastName = lastName

        res.status(200).send({ response: `Atualizando o usuário ${id} -> ${name} ${lastName}`})
    })
    .patch('updatePatch/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome } = req.body;

        res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
    })

export default router;