const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./Controllers/notes.controller");
const notesRoutes = require("./Routes/notes.routes");
const app = express();

// use keyword link anything with express(app)
app.use(express.json());

connectDB();


app.get("/allNotes", async(req,res)=>{

    try{

        const allNotes = await NotesModel.find();

    return res.status(200).json({
        message : "All notes fetched successfully",
        data : allNotes
    })

    }catch(error){
        console.log("Error in fetching the notes",error);
    }



})

app.use("/notes",notesRoutes)

module.exports = app;