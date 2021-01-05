var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restapi', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

var con_db = mongoose.connection;

// defining schema
var passCatSchema = new mongoose.Schema({
	passwordCategory : {type : String, required : true},
	date : {type : Date, default : Date.now}
});

// creating modal
var passCatModel = mongoose.model('passwordCategory', passCatSchema);

module.exports = passCatModel;