const mongoose = require('mongoose');
const { Schema } = mongoose;

const User =  new Schema({
    name: String,
    email: String,
    password: String,
    cellphone: String
})

module.exports =  mongoose.model('User', User);