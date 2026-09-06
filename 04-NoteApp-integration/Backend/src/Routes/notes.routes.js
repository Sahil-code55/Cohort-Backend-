const express = require("express");
const {createNotesController ,getAllNotesController, getSingleNoteController, updateNoteController, deleteNoteController, updateSingleNoteController } = require("../Controllers/notes.controller");

const router = express.Router();


// create note
router.post("/create", createNotesController);

// read notes
router.get("/allNotes",getAllNotesController);
// read single note
router.get("/:id",  getSingleNoteController); 

// update note
router.put("/:id", updateNoteController);

// update single entity
router.patch("/:id/single", updateSingleNoteController);

// delete note
router.delete("/:id", deleteNoteController);



module.exports = router;