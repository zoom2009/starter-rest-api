const express = require('express')
const app = express()
const db = require('cyclic-dynamodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  res.json({ text: 'hello world from afu' })
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
