import express from 'express';
import bruxos from './src/data/bruxos.js';

const app = express();
const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Minha API de Harry Potter está ativa! <h1/>")
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.get("/bruxos/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    console.log(typeof(id));
    const bruxo = bruxos.find(b => b.id === id);
    console.log(bruxo);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(400).json
        mensagem: "Bruxo não encontrado!"
    }
})

app.listen(3000, () => {
    console.log(`O servidor está funcionando no link http://localhost: ${serverPort}`)
});