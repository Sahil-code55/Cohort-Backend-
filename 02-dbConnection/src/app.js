const express = require("express");
const connectDB = require("./config/db");
const NotesModel = require("./models/note.,model");
const app = express();
app.use(express.json())

connectDB();

app.get("/",(req,res)=>{
res.send("ok")
})

app.post("/create", async(req,res)=>{
    let {title , description} = req.body;

    const newNotes = await NotesModel.create({
        title,
        description,
    });
    res.send({
        success: true,
        message: "Note created successfully",
        data : newNotes,
    })
})




module.exports = app;