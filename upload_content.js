const mongo = require("mongodb").MongoClient;
const fs = require('fs');
const csv = require('csv-parser');
//read csv file and add all content to mongodb instance
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0-33u4j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
fs.readFile('data.csv','utf-8',function(err,data){
  if(err) throw err;
  client.connect(err => {
    const collection = client.db("test").collection("fighters");
    collection.insertOne(data,function(err,res){
      if(err) throw err;
      console.log("we good");
    });
    client.close();
  });
});
