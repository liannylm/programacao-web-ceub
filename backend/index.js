const express = require('express');

const aplicacao = express();

aplicacao.get('/', (req, res) => {
    res.send("BackEnd funcionando!!!");
});

aplicacao.post('/', (req, res) => {
    res.send("Post Funcionou");
});

aplicacao.get('/moedas', (req, res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas);
});

aplicacao.post('/moedas', (req, res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas);
});

aplicacao.get('/conversao/:moedas', (req, res) => {
    console.log(req.params);
});

aplicacao.listen(4000, () => {
    console.log("Estou listen na porta 4000!!");
});