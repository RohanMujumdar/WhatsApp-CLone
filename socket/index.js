// import { Server } from "socket.io";
// // const { Server } = require('socket.io');

// const io = new Server(9000, {
//     cors: {
//         origin: 'http://localhost:3000'
//     }
// })

// let users = [];
// const addUser = (userData, socketId) => {
//     !users.some(user => user.sub == userData.sub) && users.push({...userData, socketId});
// }

// const getUser = (userId) => {
//     return users.find(user => user.sub === userId);
// }
// io.on('connection', (socket) => {
//     console.log('user connected');

//     socket.on("addUsers",userData => {
//         addUser(userData, socket.id);
//         io.emit("getUsers",users);
//     })

//     socket.on('SendMessage',data => {
//         const user = getUser(data.receiverId);
//         console.log("serr" ,user )
//         io.to(user.socketId).emit('getMessage',data);
//     })
// })



import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    // socket.on("addUser", userData => {
    //     addUser(userData, socket.id);
    //     io.emit("getUsers", users);
    //     console.log("insef")
    // })
    socket.on("addUser", userData => {
        try {
            addUser(userData, socket.id);
            io.emit("getUsers", users);
            console.log("User added:", userData);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    });

    //send message
    socket.on('sendMessage', (data) => {
        console.log("data " , data);
        const user = getUser(data.receiverId);
        console.log("sendinnggg " , user);
        io.to(user.socketId).emit('getMessage', data)
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})