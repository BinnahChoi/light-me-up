import express from "express";
import {controller} from "./script/controller.js";

const PORT = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + "/views");

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/app/docs/views/about', (req, res) => {
    res.render('about');
});

app.get('/app/docs/views/publication', (req, res) => {
    res.render('publications');
});

app.listen(PORT);
console.log(`Listening to ${PORT}`);
