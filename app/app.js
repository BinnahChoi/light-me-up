import express from "express";
import {controller} from "./script/controller.js";

const PORT = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + "/views");

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/publication', (req, res) => {
    res.render('publications');
});

app.use("/image",express.static("/assets/image"));
app.use("/", controller);

app.listen(PORT);
console.log(`Listening to ${PORT}`);
