import app from './server.js'
import dotenv from 'dotenv'
import { tester } from './api/controllers/app.controller.js'

dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}`)

  tester()
})
