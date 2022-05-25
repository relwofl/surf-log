// import React  from "react"
// parent
import { useEffect, useState } from 'react'
import LogList from './LogList';

function Logs(){
    const [logs, setLogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/surflogs')
          .then(r => r.json())
          .then(logs => setLogs(logs))
      }, []);

      function handleSort(){
        const sorted = logs.sort((a,b) => (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1)
        setLogs(sorted)
        console.log(sorted)
        console.log(logs)
    }
    // logs.sort((a,b) => (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1)
return (
    <div className="Logs">
        <div>
            <button onClick={handleSort}>Sort</button>
        </div>
     <LogList logs={logs} title="All Sessions"/>
    </div>
)
}
export default Logs