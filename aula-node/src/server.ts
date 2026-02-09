import express from 'express';

const port = 8080;

const app = express();

const pessoa = {
    nome: "Kessyane",
    sobrenome: "Santos"
}

const pessoas = {
    kessyane: {
        nome: "Kessyane",
        sobrenome: "Santos" 
    },
    joyce: {
        nome: "Joyce",
        sobrenome: "Nascimento"
    },
    fernanda: {
        nome: "Fernanda",
        sobrenome: "Fialho"
    },
    thayna: {
        nome: "Thayna",
        sobrenome: "Kaizi"
    }
}

app.get('/pessoas', (req, res) => {
    res.status(200).send({ pessoas: pessoas })
})

app.get('/pessoa', (req, res) => {
    res.send({ pessoa: pessoa })
})

app.get('/', (req, res) => {
    res.send({ response: "Api funcionando!"})
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})