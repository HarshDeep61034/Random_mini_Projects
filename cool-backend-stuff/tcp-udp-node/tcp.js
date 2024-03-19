const net = require("net");

const server = net.createServer(socket =>{
    socket.write("Hello");
    socket.on("data", (data)=>{
        socket.write(data.toString());
    })
})

server.listen(8080);