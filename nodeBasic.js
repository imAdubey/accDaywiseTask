
// --------------------------------- BASIC INTRO ---------------------------------

const a = 10;
const b = 20;
const c = a + b;

console.log("Sum is : "+c);

console.log("Hello World");



// --------------------------------- JavaScript Objects ---------------------------------

console.log("JavaScript Objects");

var user_obj = { name : "Abhishek Dubey", email : "abhishekdubey3107@gmail.com", phone_no : 8879546224 };

console.log(user_obj);
console.log("Name : " +user_obj.name);



// --------------------------------- Anonymous Function ---------------------------------

console.log("A function without any name is called as Anonymous Function");

var fun = function(a, b){
var c = a + b;
console.log("The sum is : " +c);
}

fun(10, 20);



// --------------------------------- Arrow Function ---------------------------------

console.log("Arrow Function");

var fun = (a, b) => {
  var c = a + b;
  console.log("The sum of "+a+" and "+b+" is : " +c);
}

fun(5, 4);



// --------------------------------- Global Objects ---------------------------------

console.log("Global Objects in Nodejs");

// // to get directory name
console.log(__dirname);

// // to get filename
console.log(__filename);

// // require object(modules)
var req = require('./tp.js');
req.addfun(10, 20);
console.log(req.name);

// --------------------------------- Path and OS Module ---------------------------------
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

// // template string using ECMAScript 6
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

// --------------------------------- Prototype in Nodejs ---------------------------------
var student = function(){
  this.name = "Abhishek Dubey";
  this.email = "abhishekdubey3107@gmail.com";
}

student.prototype = {
	phone_no : 8879546224,
 	getName : function(){
 		return this.name;
 	}
}

var stu_obj = new student();
console.log(stu_obj.email);

// --------------------------------- Events Module ---------------------------------
const EventEmitter = require('events');

const Logger = require('./tp');
const logger = new Logger();

// // register a listner
logger.on('messageLogged', (arg)=>{
     console.log("Listner Called", arg);
});

logger.log("Hello");

// --------------------------------- HTTP Module in Nodejs ---------------------------------
 var http = require("http");
 var server = http.createServer(function(req, res){
 	if(req.url === '/'){
         res.writeHead(200, {"content-type" : "text/html"});
         res.write("<h1>Nodejs Server Running Successfully</h1>");
         res.end();
     }

     if(req.url === '/api'){
         res.write(JSON.stringify([1, 2, 3]));
         res.end();
     }
 });
 server.listen(3000, () => console.log("Server Running on port 3000"));


// --------------------------------- Files System in Nodejs ---------------------------------

var filesystem = require("fs");
var http = require("http");

var server = http.createServer(function(req, res){
	filesystem.readFile(__dirname+"/text.txt", "utf8", (err, data) => {
 		res.writeHead(200, {"content-type" : "text/plain"});
 		if(err){
 			res.write(err);
 		}else{
 			res.write(data);
 		}
 		res.end();
 	});
 }).listen(3000, () => console.log("Server Running on port 3000 Successfully!!"));
 console.log(filesystem);

