const express = require('express');
const server = express();
const port = 8080;
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

