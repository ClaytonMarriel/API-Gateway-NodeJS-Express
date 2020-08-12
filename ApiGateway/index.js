const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;

const {
    USERS_API_URL,
    PRODUCTS_API_URL,
    TESTE_API_URL,
} = require('./URLs');

const userServiceProxy = httpProxy(USERS_API_URL);
const productServiceProxy = httpProxy(PRODUCTS_API_URL);
const testeServiceProxy = httpProxy(TESTE_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next));
app.get('/products', (req, res, next) => productServiceProxy(req, res, next));
app.get('/teste', (req, res, next) => testeServiceProxy(req, res, next));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));