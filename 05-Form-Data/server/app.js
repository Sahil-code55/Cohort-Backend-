const express = require("express")
const userRoute= require("../server/src/routes/user.routes")

const app = express();
app.use(express.json())


app.use("/user",userRoute)
module.exports = app;