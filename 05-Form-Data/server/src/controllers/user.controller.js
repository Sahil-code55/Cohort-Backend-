
const create = (req ,res)=>{
     console.log("hello");
     
    console.log(req.body);
    console.log(req.files);

    res.status(201).json({
        message: "User created successfully"
    })

}

module.exports = {create}