const express = require('express');
const router = express.Router();

const {findEmp, saveEmp, updateEmp, deleteEmp} = require('../service/v1/user/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  findEmp().then((data)=>{
    res.status(200).json({
      message: "OK",
      result: data
    });
  }).catch((err)=>{
    res.status(500).json({
      message: err
    });
  });
});

router.post('/', (req, res)=>{
  const body = req.body;
  saveEmp(body).then((data)=>{
    res.status(200).json({
      message: "Saved!",
      result: data
    });
  }).catch((err)=>{
    // console.error(err);
    res.status(500).json({
      message: err
    });
  });
});

router.put('/updateEmployee/:id', (req, res)=>{
  const id = req.params.id;
  const body = req.body;
  updateEmp(id, body).then((data)=>{
    res.status(200).json({
      message: "Updated!",
      result: data
    });
  }).catch((err)=>{
    // console.error(err);
    res.status(500).json({
      message: err
    });
  });
});

router.delete('/deleteEmployee/:id', (req, res)=>{
  const id = req.params.id;
  deleteEmp(id).then((data)=>{
    res.status(200).json({
      message: "Deleted!",
      result: data
    });
  }).catch((err)=>{
    // console.error(err);
    res.status(500).json({
      message: err
    });
  });
});

module.exports = router;
