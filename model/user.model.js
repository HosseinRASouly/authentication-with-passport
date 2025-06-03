// add user Model
const {default : mongoose} = require('mongoose');

const user = new mongoose.Schema({
    fullname : {type : String, required: true},
    username : {type : String, required: true},
    password : {type : String, required: true, unique : true},
})

const userModel = mongoose.model('user', user);

module.exports = {
    userModel
}