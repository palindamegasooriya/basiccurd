var mongoose = require('mongoose');

 var userSchema = mongoose.Schema({
    email: String,
    password: String
});
var User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User');