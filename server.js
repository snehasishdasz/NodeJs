//? var add = function(a,b){
//?     return a + b;
//? }
//?? var add = add(5,3);
//?? console.log(add);

//?? var add = (a,b) =>{
//?     return a + b;
//? }
//? var add = add(5,5);
//? console.log(add);

//? Callback Functions --------------------------------
//? const prince = function(){
//?     console.log("Hii i am callback");
//? } 
//? const add = function(a,b,prince){
//?  var result = a+b;
//?  console.log(" Result is:"+result);
//?  prince();
//? }
//? add(5,5,prince);



//? const add = function(a,b,callback){
//?     var result = a+b;
//?     console.log(" Result is:"+result);
//?     callback();
//?    }
//?    add(5,5,function(){console.log("Hii i am also callback")} );



//*Core module fs/os
//? var fs = require("fs");
//? var os = require("os");

//? var user = os.userInfo();
//? console.log(user);
//? console.log(user.username);

//? fs.appendFile("greeting.txt", "Hi "+user.username+"\n", function(){
//?     console.log("File is created successfully🤑");
//? });


//* By this style we can import our file and function  from separate folder and path
//? const notes = require("./note.js");

//? var age =  notes.age;
//? console.log(age);

//? var result = notes.add(age+12,10);
//? console.log(result);

//* LOADASH
//?var _ = require('lodash');

//? var data = ["hii", 1,2,1,2,1,3,4,"hii","hlw"];
//? var filter = _.uniq(data);
//? console.log(filter);

//? var data = "ds";
//? console.log(_.isString(data)); 
//! true
//? console.log(_.isString(5)); 
//!false
//? console.log(_.isString("hii"));  
//!true

//* JSON to Object convert
//? const jsonString = '{"name":"John","age":25,"city":"Bhonsor"}';
//? const Object = JSON.parse(jsonString);
//? console.log(Object); 
//! { name: 'John', age: 25, city: 'Bhonsor' } 
//JSON is always STRING TYPE
//* Object to JSON convert
//? const objectToConvert = 
//? {   name: 'John', 
//?     age: 25, 
//?     city: 'Bhonsor' 
//? };
//? const json = JSON.stringify(objectToConvert);
//? console.log(json);
//! {"name":"John","age":25,"city":"Bhonsor"}



