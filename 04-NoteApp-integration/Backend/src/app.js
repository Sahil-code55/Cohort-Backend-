const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const cors = require("cors")
const createNotesController = require("./Controllers/notes.controller");
const notesRoutes = require("./Routes/notes.routes");
const app = express();

// use keyword link anything with express(app)
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
}))


connectDB();



app.use("/notes",notesRoutes)

module.exports = app;