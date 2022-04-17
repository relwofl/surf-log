const LogList = ({ logs, title }) => {

    return (
    <div className="log-list">
         <h3>{title}</h3>
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

export default LogList;