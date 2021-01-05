var express = require('express');

var passCatModel = require('../../models/password_category');

var router = express.Router();

// to display any perticular columns
// var fetchPassCategories = passCatModel.find({},{"_id":0, "passwordCategory":1});
router.get('/getCat', (req, res, next)=>{
    passCatModel.find({}).exec().then((data)=>{
        res.json({
            message: "success",
            result: data
        });
    }).catch((err)=>{
        res.json(err);
    });
});

router.post('/addCategory', (req, res, next)=>{
    var passCat = req.body.passcat;
    new passCatModel({
            passwordCategory: passCat
        }).save().then((data)=>{
            res.json({
                message: "Saved",
                result: data
            });
        }).catch((err)=>{
            res.json(err);
        });
});

// same code for router.put() as well
router.patch('/updateCategory/:id', (req, res, next)=>{
    var id = req.params.id;
    var upPassCat = req.body.passcat;
    passCatModel.updateOne({
        _id: id
    },{
        $set:{
            passwordCategory: upPassCat
        }
    }).exec().then((data)=>{
        res.json({
            message: "Updated",
            result: data
        });
    }).catch((err)=>{
        res.json(err);
    });
});

router.delete('/deleteCategory/:id', (req, res, next)=>{
    var id = req.params.id;
    passCatModel.deleteOne({
        _id: id
    }).exec().then((data)=>{
        res.json({
            message: "Deleted",
            result: data
        });
    }).catch((err)=>{
        res.json(err);
    });
});

module.exports = router;
