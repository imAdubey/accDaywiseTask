// ------------------------------------------------------------------------- models here -------------------------------------------------------------------------
const {find, save, update, deleteu} = require('../service/v1/users');

// ------------------------------------------------------------------------- callback functions here -------------------------------------------------------------------------

// fetch user
exports.fetchUser = (req, res)=>{
    find().then((data)=>{
        if(data.length > 0){
            res.json({
                message: "OK",
                result: data 
            });
        }else{
            res.json({
                message: "No data available!" 
            });
        }
    }).catch((err)=>{
        res.json({
            message: err.message
        });
    });
}

// add user
exports.addUser = (req, res)=>{
    save(req.body).then((data)=>{
        res.json({
            message: "Saved!",
            result: data
        });
    }).catch((err)=>{
        res.json({
            message: err.message
        });
    });
}

// update user
exports.updateUser = (req, res)=>{
    let id = req.params.id;
    let bodyData = req.body;

    update(id, bodyData).then((data)=>{
        res.json({
            message: "Updated!",
            result: data
        });
    }).catch((err)=>{
        res.json({
            message: err.message
        });
    });
}

// delete user
exports.deleteUser = (req, res)=>{
    let id = req.params.id;

    deleteu(id).then((data)=>{
        res.json({
            message: "Deleted!",
            result: data
        });
    }).catch((err)=>{
        res.json({
            message: err.message
        });
    });
}