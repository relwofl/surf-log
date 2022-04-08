import React, { useEffect, useState } from "react"

function Logs(){
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/surflogs")
          .then(r => r.json())
          .then(logs => setLogs(logs))
          
      }, []);

return (
    <div>
    <Logs logs={logs} />
    </div>
)
}
export default Logs