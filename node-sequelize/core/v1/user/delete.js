// models
const Employee = require('../../../models').Employee

class Delete { 
    deleteUser(id){
        // console.log(body);
        return new Promise((resolve, reject) => {
            Employee.destroy({
                where: {
                  id: id
                }
              }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                // console.error(err);
                reject(err)
            });
        });
    }
}

module.exports = {
    DeleteClass: Delete,
};