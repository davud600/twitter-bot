import express from "express"
import cors from "cors"
import main_router from "./api/routes/app.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/", main_router)

export default app