import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import companyRouter from "./routes/company.route.js"
import stockRouter from "./routes/stocks.route.js"

const app = express()

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    // credentials: true
} 

console.log(process.env.CORS_ORIGIN, 11233);

app.use(express.json())
app.use(cors(corsOptions))

app.use("/api", companyRouter)
app.use("/api", stockRouter)

export default app ;