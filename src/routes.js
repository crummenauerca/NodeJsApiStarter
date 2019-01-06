const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');

// Criação da primeira rota
routes.get('/products', productController.index);

module.exports = routes;