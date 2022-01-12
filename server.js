const express = require("express")

const server = express()

const path = require('path');

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/src"+'/main.html'));
})

server.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname+"/src"+'/admin.html'));
})


function keepAlive() {
  server.listen(6000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive
