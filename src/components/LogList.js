function LogList ({ logs, title }) {
    return (
    <div className="loglist">
         <h3>{title}</h3>
        {logs.map((log) => (
        <div className="logdetails" key={log.id}>
            <h4> {log.title} </h4>
            <h5> {`${log.date} - ${log.time}`}</h5>
            <h5> {log.swell} </h5>
            <p> {log.note}</p>
            </div>
        ))}
    </div>
    )
}

export default LogList;