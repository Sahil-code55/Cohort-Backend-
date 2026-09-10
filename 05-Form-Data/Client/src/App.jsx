import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {
const {register , handleSubmit} =   useForm()

const SubmitHandler = (data)=>{
 console.log(data);
 

}

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500">Tailwind works</h1>
    <form
    className="flex flex-col gap-4 "
     onSubmit={handleSubmit((SubmitHandler))}  action="">
      <input type="text" placeholder=" Enter your name " />
      <input type="text" placeholder=" Enter your email " />
      <input type="file" placeholder=" upload your profile pic " />
      <input type="submit" />
    </form>
    </div>
  )
}

export default App
