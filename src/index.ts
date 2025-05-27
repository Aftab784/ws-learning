import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

let count = 0

wss.on("connection", function(socket){
    console.log("Connection made successfully")
    setInterval(() => {
        
        socket.send("Current price of Solana is " + Math.random())
    },500)

    socket.on("message",(e)=> {
        console.log(e.toString())
    })
})