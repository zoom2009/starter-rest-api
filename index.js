const express = require('express')
const CyclicDB = require('cyclic-dynamodb')
const db = CyclicDB('sore-gold-betta-tutuCyclicDB')

const animals = db.collection("animals")

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('test')
})

app.get('/create', async (req, res) => {
  try {
    let leo = await animals.set("leo", {
      type: "cat",
      color: "orange"
    })
    res.json({ leo })
  } catch (e) {
    res.json({ e })
  }
})

app.get('/all', async (req, res) => {
  let item = await animals.get("leo")
  res.json({ item })
})

app.listen(PORT, () => {
  console.log('running on port:', PORT)
})
