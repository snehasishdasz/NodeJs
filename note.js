console.log("Hii i am going to be imported in server.js file")

var age = 24;
const add = function(a,b){
    return a+b;
}

// by ths we can import all things which we want in server.js file
module.exports = {
    age , add
}