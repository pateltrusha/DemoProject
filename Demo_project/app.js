//require('dotenv').config();
const logger = require('./libs/logger');
//const { port } = require('./configuration');
const db = require('./database');
const repositories = require('./repositories')(db);
const services = require('./services')(repositories);
const app = require('./http/app')(services);
const signals = require('./signals');
const port = 3000;
const server = app.listen(port, () => {
    logger.info(`Listening on *:${port}`);
});

const shutdown = signals.init(async () => {
    await db.close();
    await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

////require('dotenv').config();
////const logger = require('./libs/logger');
//const { port } = require('./configuration');
//const db = require('./database');
//const repositories = require('./repositories')(db);
//const services = require('./services')(repositories);
//const app = require('./http/app')(services);
//const signals = require('./signals');

//const server = app.listen(port, () => {
//    console.log('test')
//    // logger.info(`Listening on *:${port}`);
//});

//const shutdown = signals.init(async () => {
//    await db.close();
//    await server.close();
//});

////process.on('SIGINT', shutdown);
////process.on('SIGTERM', shutdown);



//'use strict';
//var debug = require('debug');
//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

////var routes = require('./routes/index');
//var products = require('../http/routes/product');

//var app = express();

//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

//// uncomment after placing your favicon in /public
////app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

////app.use('/', routes);
//app.use('/products', products);

//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

//// error handlers

//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

//// production error handler
//// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


//app.set('port', process.env.PORT || 3000);
//console.log('hi')

//var server = app.listen(app.get('port'), function () {
//    debug('Express server listening on port ' + server.address().port);
//});
