import express from 'express';
import routes from './routes/routes.js'

const port = 8080;
const app = express();

routes(app);

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando!"})
})

app.listen(port, () => {
    console.log(`Server escutando na porta ${port}`)
})