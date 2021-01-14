// models
const Employee = require('../../../models').Employee

class Find { 
    findAll(){
        return new Promise((resolve, reject) => {  
            Employee.findAll().then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    FindClass: Find,
};