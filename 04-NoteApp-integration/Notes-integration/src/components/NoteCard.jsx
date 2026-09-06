import React from 'react'

const NoteCard = ({note, deleteNote, UpdateNote}) => {
  return (
    <div className="  flex flex-col gap-2 border border-gray-500 rounded-2xl w-80  p-2 ">
      <h1 className="text-2xl">{note.title}</h1>
    <p className=" text-sm mb-2 ">{note.description.length > 20 ? note.description.substring(0,20):note.description}</p>
     
     <div className="flex   justify-between">
        <button className="px-7 py-2 rounded-2xl bg-amber-400 text-white active:scale-95 hover:bg-amber-300" 
        onClick={()=> UpdateNote(note)}
        >Update</button>

        <button
         className="px-7 py-2 bg-red-500 rounded-2xl text-white active:scale-95 hover:bg-red-400"
         onClick={()=>deleteNote(note._id)}
          >Delete</button>
     </div>
    </div>
  )
}

export default NoteCard
