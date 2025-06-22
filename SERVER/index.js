
const express = require('express');

const app = express();
app.get("/",(req,res)=>{
   return res.send("Hello i am HOME page");
})

app.get("/about",(req,res)=>{
//    return res.send("Hello i am ABOUT page" + " and my NAME is: " + req.query.myname);
      return res.send(`Hello i am About page and my NAME is: ${req.query.myname}`);
})

// function myHandler(req,res){
//     const log = `${Date.now()}: ${req.url} New Request Received\n`;

//     const myUrl = url.parse(req.url,true)
//     console.log(myUrl);
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(myUrl.pathname){
//             case '/': res.end("HomePage");
//             break;
//             case '/about': 
//             const username = myUrl.query.myname
//             res.end(`Hii,${username}`);
//             break;
//             default:
//                 res.end("Error Page"); 
//         }
//         // res.end("Hello from server");
//     })
// }

// const myServer = http.createServer(app);

app.listen(8000, ()=> console.log("Server Started"));