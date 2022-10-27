var express = require('express');
var router = express.Router();

// Import Controller
var ctrlMhs = require('../controllers/mahasiswaCtrl');

// Daftarkan Routes
// Http://localhost:3000/api/mahasiswa -> get -> all data mhs
// Http://localhost:3000/api/mahasiswa -> post -> insert data mhs
router.route('/mahasiswa')
    .get(ctrlMhs.mhsList)
    .post(ctrlMhs.mhsCreate);
    
module.exports = router;