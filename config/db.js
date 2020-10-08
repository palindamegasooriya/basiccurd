var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/withtoken', function (err) {
 if (err) throw err;
  console.log('Successfully connected');
 });