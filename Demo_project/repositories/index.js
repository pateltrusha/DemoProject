// Register all the services here
const productRepositoryFactory = require('./productRepository');

module.exports = (db) => {
    const productRepository = productRepositoryFactory.create(db);
    return ({
        productRepository,
    });
};