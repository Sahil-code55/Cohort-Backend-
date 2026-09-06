import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoteCard from './components/NoteCard';


const App = () => {

  const [FormValues, setFormValues] = useState({
    title: "",
    description: ""
  })

  const [AllNotes, setAllNotes] = useState([])

  const [UpdateNoteId, setUpdateNoteId] = useState(null)


 const handleChange = (e)=>{
     setFormValues( (prev)=>({ ...prev,[e.target.name]: e.target.value})
    )}

 const handleSubmit = async(e)=>{
  e.preventDefault();

  if(UpdateNoteId){

      let res  = await axios.put(`http://localhost:3000/notes/${UpdateNoteId}`, FormValues)
        setUpdateNoteId(null)
  }else{
 
      let res  = await axios.post("http://localhost:3000/notes/create",FormValues)
  }

  setFormValues({
    title:"",
    description:"",
  })
 getAllNotes()
 }
 
 const getAllNotes = async()=>{
  try {
    let res = await axios.get("http://localhost:3000/notes/AllNotes")
  
  setAllNotes(res.data.data)

  } catch (error) {
    console.log("error in getting all data",error);
  }
  
 }
useEffect(() => {
   getAllNotes();
}, [])



const deleteNote = async(id)=>{
  try {
    let res = await axios.delete(`http://localhost:3000/notes/${id}`); 
    getAllNotes()
  } catch (error) {
    

    console.log("Error in deleting note",error);
    
  }
  
 

}

const UpdateNote= (note)=>{
 setUpdateNoteId(note._id)
 setFormValues({
  title: note.title,
  description : note.description
 })
 
}


 
  return (
    <div className = " overflow-auto bg-gray-800 text-white h-screen p-10 flex flex-col gap-3 ">
      <h1 className="text-3xl font-bold ">Note App</h1>
    <form
    onSubmit={handleSubmit}
    action=""
    className =" flex flex-col gap-5 w-1/4  mt-12 border border-gray-400 p-5 rounded-lg"
    >
      <input
      name="title"
      required
      onChange ={handleChange}
      value={FormValues.title}
       type="text"  placeholder ="Enter title..."
       className ="py-2 px-4 rounded-xl border border-gray-300 *:focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       /> 

      <input
      minLength={5}
      required
      name="description"
      onChange ={handleChange}
      value={FormValues.description}
       type="text"  placeholder ="Enter description..."
       className ="py-2 px-4  rounded-xl border border-gray-300 *:focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
       /> 

       <button 
      
       className = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg *:focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
       >
        {UpdateNoteId ? "Update Note" : "Add Note"}
       </button>



    </form>

<div className="flex flex-wrap rounded-xl  gap-4 border border-2 p-5">
  {AllNotes.length === 0 ? (
    <p className="text-2xl text-gray-600">Add new Note.....</p>
  ) : (
    <>
      {AllNotes.map((val) => (
        <NoteCard key={val._id} note={val} deleteNote={deleteNote} UpdateNote ={UpdateNote} />
      ))}
    </>
  )}
</div>
    </div>
  )
}

export default App
