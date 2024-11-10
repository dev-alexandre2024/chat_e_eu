-- Criação do banco de dados
CREATE DATABASE meu_site;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Inserir um usuário
INSERT INTO usuarios (nome, email) VALUES ('João', 'joao@exemplo.com');
