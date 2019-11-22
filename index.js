const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path"); //used to handle file paths in express

const PORT = process.env.PORT || 5000; //you want to have the process.env.PORT in case the port is in the servers env

app.use(express.static(path.join(__dirname,"templates"))); //app.use is a middleware function

//route to get to fighter data
app.get('/api/fighters',(req,res) => res.sendFile(path.join(__dirname,".","data.csv")));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"templates","index.html"));
});

app.get('/information',function(req,res){
  res.sendFile(path.join(__dirname,"templates","information.html"));
});

//use a callback function to tell the console we're running
app.listen(PORT,()=>console.log("Server currently running on " + PORT ));
