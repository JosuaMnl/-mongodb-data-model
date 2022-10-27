const mongoose = require('mongoose');

// Buat Schema terlebih dahulu
const mhsSchema = new mongoose.Schema({
    npm : String,
    nama : String,
    tgl_lahir : Date,
    hobi : [String]
})

// Compile schema ke model untuk membuat model
// Parameter 1 nama model, Parameter 2 nama Schema, Parameter 3 nama collection yang telah dibuat di mongoDB
mongoose.model('Mahasiswa', mhsSchema, 'mhs');
