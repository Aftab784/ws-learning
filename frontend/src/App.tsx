import { useEffect, useRef, useState } from "react"
import "./App.css"
function App(){
  
  const [ws, setWs] = useState<WebSocket>();

  function sendMessage(){
    if (ws) {
      ws.send("ping")
    }
  }
  
  useEffect(()=> {
    const ws = new WebSocket("ws://localhost:8080")
    console.log("connection made")
    setWs(ws)

    ws.onmessage = (ev)=>{
      console.log(ev.data)
    }
  }, [])

  
  return(
    <div>
      <input type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Button</button>
    </div>
  )
}

export default App