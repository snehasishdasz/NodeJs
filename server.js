// var add = function(a,b){
//     return a + b;
// }
// var add = add(5,3);
// console.log(add);

// var add = (a,b) =>{
//     return a + b;
// }
// var add = add(5,5);
// console.log(add);

// Callback Functions --------------------------------
// const prince = function(){
//     console.log("Hii i am callback");
// } 
// const add = function(a,b,prince){
//  var result = a+b;
//  console.log(" Result is:"+result);
//  prince();
// }
// add(5,5,prince);



// const add = function(a,b,callback){
//     var result = a+b;
//     console.log(" Result is:"+result);
//     callback();
//    }
//    add(5,5,function(){console.log("Hii i am also callback")} );

var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt", "Hi "+user.username+"\n", function(){
    console.log("File is created successfully🤑")
});