const express = require("express")
const userRoute= require("../server/src/routes/user.routes")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/user",userRoute)
module.exports = app;