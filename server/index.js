import app from "./server.js"
import dotenv from "dotenv"

dotenv.config()

const port = 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})