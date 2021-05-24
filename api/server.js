const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const plantsRouter = require("./plants/plants-router");
const server = express();

server.use(express.static(path.join(__dirname, "../client")));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/plants", plantsRouter);
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
