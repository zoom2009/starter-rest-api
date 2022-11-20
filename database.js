const CyclicDb = require("cyclic-dynamodb")
const db = CyclicDb("sore-gold-betta-tutuCyclicDB")

const animals = db.collection("animals")

export default animals
