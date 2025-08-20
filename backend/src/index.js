import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import app from "./app.js"

const PORT = process.env.PORT || 8001

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at port: ${PORT}`);
    }) 
})
.catch((err) => {
    console.log(`MongoDB Connection Error!: ${err}`);
})