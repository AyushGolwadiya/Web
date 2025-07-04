const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect(process.env.DB_CONNECT).then(() =>{
        console.log('Connected');
    }).catch(err => console.log(err));
}

module.exports = connectDb ;