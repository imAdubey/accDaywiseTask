const mongoose = require('mongoose');

// defining schema
const usersSchema = new mongoose.Schema({
	fName : {type : String, required: true},
    lNname : {type : String, required: true},
    dob: {type: Date, required: true},
    ph_no : {type : Number, required: true, unique: true},
    isactive: {type: Boolean, default: false},
	date : {type : Date, default : Date.now}
});

// creating modal
const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;