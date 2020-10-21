const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log("ENDPOINT CALLED")
  const response = {
    player1: 2,
    player2: 1,
    quantity: 3,
  };
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
