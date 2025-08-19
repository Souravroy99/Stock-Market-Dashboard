import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import companyRouter from "./routes/company.route.js"
import stockRouter from "./routes/stock.route.js"

const app = express()

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}

app.use(express.json())
app.use(cors(corsOptions))

app.use("/api", companyRouter)
app.use("/api", stockRouter)

export default app ;