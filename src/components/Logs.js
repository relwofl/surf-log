// import React  from "react"
import { useEffect, useState } from 'react'
import LogList from './LogList';

function Logs(){
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/surflogs')
          .then(r => r.json())
          .then(logs => setLogs(logs))
      }, []);

return (
    <div className="Logs">
     <LogList logs={logs} title="All Sessions"/>
    </div>
)
}
export default Logs