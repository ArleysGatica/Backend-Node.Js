const express = require('express');

const Products = require('../Router/Product');
const Categories = require('../Router/Categories');
const Users = require('./../Router/User');
const Ordens = require('./../Router/Ordens');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', Products);
    router.use('/categories', Categories);
    router.use('/users', Users);
    router.use('/orders', Ordens);
}

module.exports = routerApi;