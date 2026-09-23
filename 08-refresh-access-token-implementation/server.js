import app from "./src/app/app.js"
import { connectDB } from "./src/config/db.js";


await connectDB();
let port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port",port);
    
})