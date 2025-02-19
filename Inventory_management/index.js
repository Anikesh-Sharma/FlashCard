const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Value = require('./src/components/Models/user.model')

const app = express();

// anikeshsharma754

app.listen(3000, () => {
    console.log('Server started');
});


async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://anikeshsharma754:anikeshsharma754@test.id4mp5e.mongodb.net//",
      {}
    );
    console.log("Connection established");
  } catch (err) {}
}

connectToDB();

app.post("/Value", (req, res) => {
    req.send('Welcome to the server', req.ip, req.method)
});


app.get("/create", async (req, res) => {
    const {title, Desc, price} = req.body;
});

