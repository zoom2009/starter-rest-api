const CyclicDb = require("cyclic-dynamodb")
const db = CyclicDb("bored-sunglasses-lionCyclicDB")

const animals = db.collection("animals")

export default animals
