const { log } = require("console");
const express = require("express");
const { WebSocket } = require("ws");

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log("server is listening.... ");
});

const wss = new WebSocket.WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data form clien %s:", data);
    ws.send("Thanks buddy!..");
  });
});
