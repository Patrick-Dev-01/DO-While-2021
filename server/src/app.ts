import "dotenv/config";
import express from 'express';
import { router } from "./routes";

import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());
app.use(cors());
app.use(router);

export { serverHttp, io}
