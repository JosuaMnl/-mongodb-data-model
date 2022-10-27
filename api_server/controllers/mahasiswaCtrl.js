const mongoose = require('mongoose');

// Karena sudah dipanggil model mahasiswa di db.js, tidak perlu require lagi
let mahasiswa = mongoose.model('Mahasiswa');

const mhsList = (req, res) => {
    mahasiswa.find({}, 
        function(err, result){
            if(err){
                res.status(500)
                    .json({
                        'status' : 'failed'
                    });                
            } else {
                res.status(200)
                    .json({
                        'status' :'success',
                        'data' : result
                    });
            }
        })
}

const mhsCreate = (req, res) => {

}

const mhsReadOne = (req, res) => {

}

const mhsUpdateOne = (req, res) => {

}

const mhsDeleteOne = (req, res) => {
    
}
module.exports = {
    mhsList,
    mhsCreate,
    mhsReadOne,
    mhsUpdateOne,
    mhsDeleteOne
}