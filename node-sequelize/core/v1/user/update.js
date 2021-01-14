// models
const Employee = require('../../../models').Employee

class Update { 
    updateUser(params, body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            Employee.update(
                { 
                  first_name: body.fname,
                  last_name: body.lname,
                  dob: body.dob,
                  mobile_no: body.mobileno,
                  is_active: true,
                  company_id: body.compid,
                }, 
                {
                where: {
                  id: params
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
    UpdateClass: Update,
};