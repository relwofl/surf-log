// import React  from "react"
import { useEffect, useState } from 'react'

function Logs(){
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/surflogs")
          .then(r => r.json())
          .then(logs => setLogs(logs))
          
      }, []);

return (
    <div className="Logs">
        {/* <h1>need to work on this ahh</h1> */}
        {logs.map((log) => (
        <div className="every-log" key={log.id}>
            <h2> {log.startTime}</h2>
            <h2> {log.endTime}</h2>
            <h2> {log.sessionLength}</h2>
            <h2> {log.surfSize}</h2>
            <h2> {log.sessionNotes}</h2>
            </div>
        ))}
    </div>
)
}
export default Logs