const express = require('express')
const app = express()
const db = require('cyclic-dynamodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  res.json({ text: 'hello world from afu' })
})

// app.get('/test-create', (req, res) => {
//   animals.set("leo", {
//     type: "cat",
//     color: "orange"
//   }).then((result) => {
//     res.json({ result })
//   }).catch((e) => {
//     res.json({ error: e })
//   })
// })

// app.get('/test-get-1', (req, res) => {
//   animals.get("leo").then((result) => {
//     res.json({ result })
//   }).catch((e) => {
//     res.json({ error: e })
//   })
// })

// app.get('/test-get-all', (req, res) => {
//   animals.get().then((result) => {
//     res.json({ result })
//   }).catch((e) => {
//     res.json({ error: e })
//   })
// })

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
