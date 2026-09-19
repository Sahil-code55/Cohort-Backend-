import app from "./src/app.js"
import ConnectDB from "./src/Config/db.config.js";

let port = 3000

ConnectDB().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port :", port);
    })
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message)
    process.exit(1)
})