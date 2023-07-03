const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const client = require("./api/clientInfo");

app.use("/api/clientInfo",client);

app.listen(port,(err)=>{
    if(err){
        console.log("error occured");
    }else{
        console.log("connection successfull");
    }
})