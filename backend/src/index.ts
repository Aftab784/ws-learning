import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 })

let count = 0

wss.on("connection", function(socket){
    console.log("Connection made successfully")

    socket.on("message",(e)=> {
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })
    
})