const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true,
        minlength: [5, "Description must be at least 20 characters"]
    }
})

const NotesModel = mongoose.model("Note",noteSchema);

module.exports = NotesModel;