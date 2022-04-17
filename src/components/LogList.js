const LogList = ({ logs }) => {

    return (
    <div className="log-list">
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