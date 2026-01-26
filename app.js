// Código com vulnerabilidades intencionais para demonstração
const express = require('express');
const app = express();

// Vulnerabilidade: SQL Injection
app.get('/user', (req, res) => {
    const query = "SELECT * FROM users WHERE id = " + req.query.id;
    // CodeQL vai detectar: "Unsanitized user input in SQL query"
    console.log(query);
});

// Vulnerabilidade: XSS
app.get('/hello', (req, res) => {
    res.send("<h1>Hello " + req.query.name + "</h1>");
    // CodeQL vai detectar: "Cross-site scripting vulnerability"
});
