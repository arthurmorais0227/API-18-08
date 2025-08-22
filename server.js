import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();
const serverPort = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Minha API de Harry Potter está ativa! <h1/>");
});

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});

app.get("/bruxos/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  console.log(typeof id);
  const bruxo = bruxos.find((b) => b.id === id);
  console.log(bruxo);

  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      mensagem: "Bruxo não encontrado com esse id!",
    });
  }
});

app.get("/bruxos/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();

  const bruxosEncontrados = bruxos.filter((b) =>
    b.nome.toLowerCase().includes(nome)
  );

  if (bruxosEncontrados.length > 0) {
    res.status(200).json(bruxosEncontrados);
  } else {
    res.status(404).json({
      mensagem: "Bruxo(s) mão encontrado(s)! com esse nome!",
    });
  }
});

app.get("/bruxos/casa/:casa", (req, res) => {
  let casa = req.params.casa;

  const bruxosDaCasa = bruxos.filter(
    (b) => b.casa.toLowerCase() === casa.toLowerCase()
  );
  if (bruxosDaCasa.length > 0) {
    res.status(200).json(bruxosDaCasa);
  } else {
    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado nessa casa!",
    });
  }
});

app.get("/bruxos/vivos/nao", (req, res) => {
  const resultado = bruxos.filter(b => !b.status);

  if (resultado) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({mensagem: "Nenhum bruxo morto encontrado!"})
  }
});

app.listen(3000, () => {
  console.log(
    `O servidor está funcionando no link http://localhost:${serverPort}`
  );
});