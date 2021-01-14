var express = require('express');
var router = express.Router();

// models
const Employee = require('../models').Employee;
const Company = require('../models').Company;

/* GET home page. */
// ----------------------------------------------------------------------------------- Company -----------------------------------------------------------------------------------
// getall
router.get('/', (req, res)=>{
  return Company.findAll().then((data)=>{
    // console.log(data);
    if(data.length > 0){
      res.json({
        message: "Success!",
        result: data
      });
    }else{
      res.json({
        message: "No records available!"
      });
    }
  }).catch((err)=>{
    res.json({
      message: err
    });
  });
});

// search
router.get('/search/:id', (req, res)=>{
  let id = req.params.id;
  return Company.findOne({ 
    where: { 
      id: id 
    } 
  }).then((data)=>{
    if(data){
      res.json({
        message: "Found!",
        result: data
      });
    }else{
      res.json({
        message: "Not Found!"
      });
    }
  }).catch((err)=>{
    res.json({
      message: err
    });
  });
});

// add
router.post('/addCompany', (req, res)=>{
  return Company.create({
    name: req.body.name
  }).then((data)=>{
    res.status(201).json({
      message: "Saved!",
      result: data
    });
  }).catch((err)=>{
    res.status(400).json({
      message: err
    });
  });
});
// ----------------------------------------------------------------------------------- Employee -----------------------------------------------------------------------------------
// get employee
router.get('/getEmployee', (req, res)=>{
  return Employee.findAll().then((data)=>{
    // console.log(data);
    if(data.length > 0){
      res.json({
        message: "Success!",
        result: data
      });
    }else{
      res.json({
        message: "No records available!"
      });
    }
  }).catch((err)=>{
    res.json({
      message: err
    });
  });
});

// add employee
router.post('/addEmployee', (req, res)=>{
  return Employee.create({
    first_name: req.body.fname,
    last_name: req.body.lname,
    dob: req.body.dob,
    mobile_no: req.body.mobileno,
    is_active: true,
    company_id: req.body.compid,
  }).then((data)=>{
    res.status(201).json({
      message: "Saved!",
      result: data
    });
  }).catch((err)=>{
    res.status(400).json({
      message: err
    });
  });
});

// update employee
router.put('/updateEmployee/:id', (req, res)=>{
  return Employee.update(
    { 
      first_name: req.body.fname,
      last_name: req.body.lname,
      dob: req.body.dob,
      mobile_no: req.body.mobileno,
      is_active: true,
      company_id: req.body.compid,
    }, 
    {
    where: {
      id: req.params.id
    }
  }).then((data)=>{
    res.status(201).json({
      message: "updated successfully!",
      result: data
    });
  }).catch((err)=>{
    res.status(400).json({
      message: err
    });
  });
});

// delete employee
router.delete('/deleteEmployee/:id', (req, res)=>{
  return Employee.destroy({
    where: {
      id: req.params.id
    }
  }).then((data)=>{
    res.status(201).json({
      message: "Deleted successfully!",
      result: data
    });
  }).catch((err)=>{
    res.status(400).json({
      message: err
    });
  });
});

module.exports = router;
