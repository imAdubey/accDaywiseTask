var userModel = require('../../../models/users');

class Users {
    findUsers(){
        return new Promise((resolve, reject)=>{
            userModel.find({}).exec().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    saveUsers(body){
        return new Promise((resolve, reject)=>{
            new userModel({
                fName: body.fname,
                lNname: body.lname,
                dob: body.dob,
                ph_no: body.phno
            }).save().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    updateUsers(id, body){
        return new Promise((resolve, reject)=>{
            userModel.updateOne({
                _id: id
            },{
                $set:{
                    fName: body.fname,
                    lNname: body.lname,
                    dob: body.dob,
                    ph_no: body.phno
                }
            }).exec().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        });
    }

    deleteUsers(id){
        return new Promise((resolve, reject)=>{
            userModel.deleteOne({
                _id: id
            }).exec().then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}

module.exports = {
    UsersClass: Users
}