const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

server = express();

server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h1> Yo </h1>");
});

module.exports = server;
