const { log } = require("console");
const fs = require("fs");
const os = require("os");


//?writeFileSync...
// fs.writeFileSync("./test.txt","Hii i am test file");

//?writeFileAsync...
// fs.writeFile("./test.txt","Hii i am a boy",(err)=>{});


//?READFILESYNC
// const result = fs.readFileSync('./contact.txt','utf-8')

// console.log(result);


//?READFILE
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// console.log(result);


//?APPENDFILESYNC
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

// fs.cpSync('./test.txt',"./copy.txt")

// fs.unlinkSync('./test.txt')

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docs/a/b",{recursive:true});




//*Sync...Blocking...
// console.log('1')
// const result = fs.readFileSync('./contact.txt','utf-8')
// console.log(result);
// console.log('2')


//*Async...Non-Blocking...
console.log('1')
const result = fs.readFile('./contact.txt','utf-8',(err,result)=>{
    console.log(result);
})
console.log('2')

//Default threadpool size is = 4
