const express = require("express");
const mongoose = require("mongoose");
const clientModule = require("../modules/clientModule");
mongoose.set("strictQuery", true);

const clientInfo = express.Router();

clientInfo.get("/info", async (request, response) => {
  const getInfo = await clientModule.find({});
  try {
    response.status(200).send(getInfo);
  } catch(err){
    response.status(404).send(err.message);
  }
});

clientInfo.post("/info/post",async(request, response)=>{
    const body = await clientModule({
        name:request.body.name,
        address:request.body.address,
    })
    try {
        let data = body.save();
        response.status(200).send(body);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

const client = mongoose
  .connect(
    "mongodb+srv://sadityaa73:33QOHhRIOoaJwy6V@cluster0.mlyxgkm.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("client module connect successfull!");
  })
  .catch((e) => {
    console.log(e.message);
  });

module.exports = clientInfo;
