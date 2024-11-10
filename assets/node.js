const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('assets'));

// Rota básica
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Node.js!');
});

// Rota para processar dados
app.get('/process', (req, res) => {
    res.json({ message: 'Dados processados no backend (Node.js)' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

node: server.js
const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meu_site'
});

// Conectar ao banco
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
    
    // Exemplo de consulta ao banco
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        console.log(results);
    });
});
npm: install :mysql2
