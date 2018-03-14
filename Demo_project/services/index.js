// Register all the services here
const productServiceFactory = require('./productService');

module.exports = (repositories) => {
    const productService = productServiceFactory.create(repositories.productRepository);
    return ({
        productService,
    });
};
