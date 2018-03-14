const Sequelize = require('sequelize');
const { config } = require('../configuration');
//const sequelize = new Sequelize({
//    dialect: 'mssql',
//    dialectModulePath: 'sequelize-odbc-mssql',
//    dialectOptions: {
//        connectionString: 'Driver={SQL Server Native Client 11.0};Server=WINDOWS-RCGQNV3;Database=DemoDB_2;Trusted_Connection=yes;'
//    }
//});
console.log(config)
const sequelize = new Sequelize(config);
const Product = require('./entities/Product')(sequelize);
//const User = require('./entities/User')(sequelize);

sequelize.sync();

////model
//var Products = sequelize.define('Products', {
//    productid: Sequelize.INTEGER,
//    productname: Sequelize.STRING,
//    price: Sequelize.DECIMAL,
//    productdescription: Sequelize.TEXT
//})
//sequelize.sync().then(function () {
//    Products.create({
//        productid: 10,
//        productname: 'Test1',
//        price: 10.1,
//        productdescription: 'Test sequelizer'
//    })
//})

// TODO: Specify your models here
module.exports = {
    Product,
    sync: sequelize.sync.bind(this),
    close: () => sequelize.connectionManager.close(),
};