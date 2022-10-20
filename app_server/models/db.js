const mongoose = require('mongoose');

let dbURI = "mongodb+srv://yosha:yoshaMongoJosua@cluster0.hmmzo2l.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
