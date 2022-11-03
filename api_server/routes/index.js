var express = require('express');
var router = express.Router();

// Import Controller
var ctrlMhs = require('../controllers/mahasiswaCtrl');

// Daftarkan Routes
// http://localhost:3000/api/mahasiswa -> get -> all data mhs
// http://localhost:3000/api/mahasiswa -> post -> insert data mhs
router.route('/mahasiswa')
    .get(ctrlMhs.mhsList)
    .post(ctrlMhs.mhsCreate);

// http://localhost:3000/api/mahasiswa/123 -> get -> get data mhs by id
// http://localhost:3000/api/mahasiswa/123 -> put -> update data mhs
// http://localhost:3000/api/mahasiswa/123 -> delete -> delete data mhs
router.route('/mahasiswa/:id')
    .get(ctrlMhs.mhsReadOne)
    .put(ctrlMhs.mhsUpdateOne)
    .delete(ctrlMhs.mhsDeleteOne);
    
module.exports = router;