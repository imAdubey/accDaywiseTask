var express = require('express');
var router = express.Router();

var nos = [
  {id: 1, name: "One"},
  {id: 2, name: "Two"},
  {id: 3, name: "Three"},
  {id: 4, name: "Four"},
  {id: 5, name: "Five"},
  {id: 6, name: "Six"},
]

var spreda = [
  {id: 0, name: "Zero"},
  ...nos
]

/* GET home page. */
router.get('/', (req, res)=>{
  res.json({
    status: "OK",
    result: nos
  });
});

router.get('/spread', (req, res)=>{
  // console.log(spreda[3].name);
  res.json({
    status: "OK",
    result: spreda
  });
});

module.exports = router;
