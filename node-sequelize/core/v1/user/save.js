// models
const Employee = require('../../../models').Employee

class Save { 
    saveUser(body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            Employee.create({
                first_name: body.fname,
                last_name: body.lname,
                dob: body.dob,
                mobile_no: body.mobileno,
                is_active: true,
                company_id: body.compid,
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
    SaveClass: Save,
};