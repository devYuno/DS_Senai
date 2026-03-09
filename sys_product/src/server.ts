import express from "express";
import routes from "./routes/routes.ts";
import connectDB from "./database/database.ts";

const port = 8080;
const app = express();

routes(app);

connectDB();

app.get('/', (req, res) => {
    res.status(200).send("The Product System is running successfully.");
})

app.listen(port, () => {
    console.log(`API is listening on port: ${port}`);
})