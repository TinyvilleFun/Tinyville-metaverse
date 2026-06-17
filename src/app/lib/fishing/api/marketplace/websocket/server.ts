import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {

  console.log(
    "Player Connected:",
    socket.id
  );

  socket.on(
    "chat",
    (message) => {
      io.emit("chat", message);
    }
  );
});
