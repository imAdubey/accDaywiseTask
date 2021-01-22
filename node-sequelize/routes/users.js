/* eslint-disable prefer-destructuring */
const express = require('express');

const router = express.Router();

const {findEmp, saveEmp, updateEmp, deleteEmp} = require('../service/v1/user/user');

/* GET users listing. */
router.get('/', (req, res) => {
  findEmp().then((data) => {
    res.render('index', {userData: data});
    // res.status(200).json({
    //   message: 'OK',
    //   result: data,
    // });
    // }).catch((err) => {
    //   res.status(500).json({
    //     message: err,
    //   });
    // });
  }).catch((err)=>{
    res.send(err);
  });
});

router.post('/addUser', (req, res) => {
  const body = req.body;
  saveEmp(body).then((data) => {
    res.redirect('/users/');
  //   res.status(200).json({
  //     message: 'Saved!',
  //     result: data,
  //   });
  // }).catch((err) => {
  //   // console.error(err);
  //   res.status(500).json({
  //     message: err,
  //   });
  // });
  }).catch((err)=>{
    res.send(err);
  });
});

router.post('/updateEmployee', (req, res) => {
  const id = req.body.id;
  const body = req.body;
  updateEmp(id, body).then((data) => {
    res.redirect('/users/');
  //   res.status(200).json({
  //     message: 'Updated!',
  //     result: data,
  //   });
  // }).catch((err) => {
  //   // console.error(err);
  //   res.status(500).json({
  //     message: err,
  //   });
  // });
  }).catch((err)=>{
    res.send(err);
  });
});

router.get('/deleteEmployee/:id', (req, res) => {
  const id = req.params.id;
  deleteEmp(id).then((data) => {
    res.redirect('/users/');
  //   res.status(200).json({
  //     message: 'Deleted!',
  //     result: data,
  //   });
  // }).catch((err) => {
  //   // console.error(err);
  //   res.status(500).json({
  //     message: err,
  //   });
  // });
  }).catch((err)=>{
    res.send(err);
  });
});

module.exports = router;
