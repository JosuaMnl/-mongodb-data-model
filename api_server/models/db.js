const mongoose = require('mongoose');

// Menambahkan nama DB si5a setelah mongodb.net/
let dbURI = "mongodb+srv://yosha:yoshaMongoJosua@cluster0.hmmzo2l.mongodb.net/si5a?retryWrites=true&w=majority";

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

// Harus dipanggil model mahasisiwa
require('./mahasiswa');