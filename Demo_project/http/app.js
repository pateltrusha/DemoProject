const express = require('express');
const bodyParser = require('body-parser');
const productRoute = require('./routes/product');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());

module.exports = (services) => {
    const product = productRoute.create(services);
    app.use('/products', product);
    app.use(errorRoute);
    return app;
};
