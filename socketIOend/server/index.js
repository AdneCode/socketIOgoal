//codaisseur template parts
const express = require('express');
const corsMiddleWare = require('cors');
const PORT = 4000;
const app = express();
app.use(corsMiddleWare());
app.use(express.json());

//socket part
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

let users = [];

io.on('connect', (socket) => {
    console.log(socket.id);
    socket.on('joinChat', (name) => {
        users = [...users, { name: name, socketId: socket.id }];
        io.emit('userUpdate', users);
        // sending to all clients except sender
        socket.broadcast.emit('addMessage', {
            name: 'Server',
            text: `User ${name} joined the chat`,
        });
        socket.emit('addMessage', {
            name: 'Server',
            text: `Welcome ${name}`,
        });
        //socket.broadcast.to(socketid).emit('message', 'for your eyes only');
    });

    socket.on('postMessage', (message) => {
        const user = users.find((user) => user.socketId === socket.id);
        const data = { name: user.name, text: message };
        io.emit('addMessage', data);
    });

    socket.on('disconnect', (reason) => {
        console.log(`User ${socket.id} disconnected (${reason})`);
        users = users.filter((user) => user.socketId !== socket.id);
        io.emit('userUpdate', users);
    });
});

//start listening
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
