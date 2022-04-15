// import React  from "react"
import { useEffect, useState } from 'react'

function Logs(){
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/surflogs')
          .then(r => r.json())
          .then(logs => setLogs(logs))
          
      }, []);

return (
    <div className="Logs">
        {/* <h1>need to work on this ahh</h1> */}
        {logs.map((log) => (
        <div className="every-log" key={log.id}>
            <h5> {`${log.startTime} - ${log.endTime}`}</h5>
           
            <h1> {log.sessionLength}</h1>
            <h1> {log.surfSize}</h1>
            <h2> {log.sessionNotes}</h2>
            </div>
        ))}
    </div>
)
}
export default Logs