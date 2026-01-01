import http from "http";
import express from "express";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve static files
app.use(express.static(path.resolve("./public")));

// socket.io handling
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("user-message", (message) => {
    console.log("📩 Message received:", message);

    // broadcast to all users EXCEPT sender
    socket.broadcast.emit("broadcast-message", {
      message: message,
      time: new Date().toLocaleTimeString()
    });
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// start server
server.listen(9000, () => {
  console.log("🚀 Server running at http://localhost:9000");
});
