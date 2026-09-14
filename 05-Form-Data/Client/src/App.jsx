import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {
const {register , handleSubmit} =   useForm()

const SubmitHandler = async(data)=>{
 
 const formData = new FormData();
 console.log(data);
 
 formData.append("name",data.name);
 formData.append("email",data.email);

 Array.from(data.images).forEach((images)=>{
  formData.append("images",images);
 })

console.log(formData);

await axios.post("http://localhost:3000/user/create",formData)

}

  return (
    <div className="h-screen flex justify-center bg-gray-600 items-center">
    
    <form
    className="flex flex-col bg-slate-100 p-4 rounded-xl gap-4 "
     onSubmit={handleSubmit((SubmitHandler))}  action="">

      <input 
      {...register("name")}
      className="border border-gray-400 rounded-xl p-2 text-gray-600 hover:border-blue-400" type="text" placeholder=" Enter your name " />

      <input
       {...register("email")}
       className="border border-gray-400 rounded-xl p-2 text-gray-600 hover:border-blue-400" type="text" placeholder=" Enter your email " />

      <input 
       {...register("images")}
      className="border border-gray-400 rounded-xl p-2 text-gray-600 hover:border-blue-400" type="file" multiple placeholder=" upload your profile pic " />

      <input 
      className="px-5 py-3 bg-blue-500 rounded-3xl
       hover:bg-blue-400 active:scale-95"
       type="submit" />
    </form>
    </div>
  )
}

export default App
