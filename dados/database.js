var mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect("mongodb://localhost/pihc");

    mongoose.connection.on('connected', function() {
        console.log('Mongo conectado');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongo desconectado');
    });

    mongoose.connection.on('error', function() {
        console.log('Erro na conexão com mongo');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Bye mongo!');
            process.exit(0);
        });
    });
}