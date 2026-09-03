const { default: mongoose } = require("mongoose");


let notesSchema = new mongoose.create({
    title :{
        type: String,
        required: true,
    },
    description:{
        type:String,
        minlength: 10,
        },
});

const NotesModel = mongoose.model("notes",notesSchema)

module.exports = NotesModel;