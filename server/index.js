import app from "./server.js"

const port = 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})