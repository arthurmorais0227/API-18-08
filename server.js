import express from "express";
import dados from "./src/data/dados.js";

const app = express();
const serverPort = 3000;
const { bruxos, casas, varinhas, animais, pocoes } = dados;

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
  const resultado = bruxos.filter((b) => !b.status);

  if (resultado) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({ mensagem: "Nenhum bruxo morto encontrado!" });
  }
});

app.get("/varinhas", (req, res) => {
  if (varinhas.length > 0) {
    res.status(200).json(varinhas);
  }
});

app.get("/varinhas/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  console.log(typeof id);
  const varinha = varinhas.find((b) => b.id === id);
  console.log(varinha);

  if (varinha) {
    res.status(200).json(varinha);
  } else {
    res.status(404).json({
      mensagem: "Varinha não encontrada com esse id!",
    });
  }
});

app.get("/casas", (req, res) => {
  if (casas.length > 0) {
    res.status(200).json(casas);
  }
});

app.get("/casas/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  console.log(typeof id);
  const casa = casas.find((c) => c.id === id);
  console.log(casa);

  if (casa) {
    res.status(200).json(casa);
  } else {
    res.status(404).json({
      mensagem: "Casa não encontrada com esse id!",
    });
  }
});

app.get("/pocoes", (req, res) => {
  if (pocoes.length > 0) {
    res.status(200).json(pocoes);
  }
});

app.get("/pocoes/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  console.log(typeof id);
  const pocao = pocoes.find((p) => p.id === id);
  console.log(pocao);

  if (pocao) {
    res.status(200).json(pocao);
  } else {
    res.status(404).json({
      mensagem: "Poção não encontrada com esse id!",
    });
  }
});

app.get("/animais", (req, res) => {
  if (animais.length > 0) {
    res.status(200).json(animais);
  }
});

app.get("/animais/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  console.log(typeof id);
  const animal = animais.find((a) => a.id === id);
  console.log(animal);

  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).json({
      mensagem: "Animal não encontrada com esse id!",
    });
  }
});

app.listen(3000, () => {
  console.log(
    `O servidor está funcionando no link http://localhost:${serverPort}`
  );
});
