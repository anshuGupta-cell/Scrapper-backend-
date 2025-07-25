const express = require('express')
require('dotenv').config();
const app = express()
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000

app.use(express.json())
console.log("second")
app.use('/api/scrapper', require('./routes/scrapper'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})