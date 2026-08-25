const express = require("express");
const app = express();
app.use(express.json());

let port = 3000;
let users = []; 

// create
app.post("/create",(req,res)=>{
    let body = req.body;
    users.push(body)
    res.send(users)
})
// get
app.get("/",(req,res)=>{
    res.send(users)
})
//delete
app.delete("/delete/:id",(req ,res)=>{
    let { id } = req.params;
   let userdata = users.filter((val)=> val.id !== id);
   users = userdata;
   res.send(userdata)
})

//update
app.put("/update/:id", (req,res)=>{
    let {id}= req.params;
    let {name} = req.body;

    let updateUsers = users.map((val)=> val.id === id ? {...val , name }: val );
    res.send(updateUsers);
})

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})