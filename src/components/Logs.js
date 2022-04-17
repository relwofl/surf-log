// import React  from "react"
import { useState } from 'react'
import LogList from './LogList';

function Logs(){
    const [logs, setLogs] = useState([
        {title: "lunch break refill", date: "2022-03-27", time: "Midday", note: " Went out and got worked!", swell: "Over Head", id:1},
        {title: "lunch break refill", date: "2022-03-28", time: "Midday", note: "Surfing solo during lunch. Went out and got worked!", swell: "Over Head", id:3},
        {title: "lunch break refill", date: "2022-03-29", time: "Morning", note: "yew!", swell: "Over Head", id:3}

    ])

    // useEffect(() => {
    //     fetch('http://localhost:3001/surflogs')
    //       .then(r => r.json())
    //       .then(logs => setLogs(logs))
    //   }, []);

return (
    <div className="Logs">
     {logs.map((log) => (
        <div className="log-details" key={log.id}>
            <h4> {log.title} </h4>
            <h5> {`${log.date} - ${log.time}`}</h5>
            <h5> {log.swell} </h5>
            <p> {log.note}</p>
            </div>
     ))}
    </div>
)
}
export default Logs