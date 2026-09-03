const NotesModel = require("../models/notes.model");

const  createNotesController = async(req,res)=>{
 try{
  const {title ,description} = req.body; 

//   creation of note
  
 const newNote = await NotesModel.create({
    title, description
 })
  return  res.status(201).json({
    message : "Note created successfully",
    data :newNote
  })



 }
 catch(error){
    console.log("Error in creation ",error)
 }

}

const getAllNotesController =  async(req,res)=>{

    try{

    const allNotes = await NotesModel.find();

    return res.status(200).json({
        message : "All notes fetched successfully",
        data : allNotes
    })

    }catch(error){
        console.log("Error in fetching the notes",error);
    }

}

const getSingleNoteController = async(req,res)=>{

    try{
 
    const {id} = req.params;
    const singleNote = await NotesModel.findById(id);

    res.status(200).json({
        message : "Single note fetched successfully",
        data : singleNote
    })



    } catch(error){
        res.status(500).json({ message: "Error in fetching single note with id "+id });
    }

}

const  updateNoteController  =async(req,res)=>{

    try{
 let {id} = req.params;
 let  data = req.body;

 // during update if we want to get current  updated data then we have to pass {new:true} as third parameter in findByIdAndUpdate method
 let updatedNote = await NotesModel.findByIdAndUpdate(id,data,{new:true});
 
 return res.status(200).json({
    message : "Note updated successfully",
    data : updatedNote
 })
 



    }
    catch(error){
        return res.status(500).json({ message: "Error in updating the note with id "+id})
    }


}

const deleteNoteController = async (req,res)=>{

    try{
    const {id} = req.params;

    const deleteNote = await NotesModel.findByIdAndDelete(id) ;
    return res.status(200).json({
        message :"Note deleted successfully",
        data : deleteNote
    })

    }
    catch(error){
   console.log("Error in deleting the note with id ",error);
   return res.status(500).json({message:" Error in deleting the note with id "+id})

    }
}




module.exports =
 {
     createNotesController,
    getAllNotesController,
     getSingleNoteController,
      updateNoteController,
      deleteNoteController
};