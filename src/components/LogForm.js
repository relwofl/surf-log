import { useState } from 'react'
function LogForm(){
    const [ date, setDate] = useState("")
    const [ time, setTime] = useState("")
    const [ swell, setSwell] = useState("")
    const [ note, setNote] = useState("")

   function handleSubmit (e) {
    e.preventDefault()
    const post = { date, time, note, swell}
    fetch('http://localhost:3001/surflogs', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
        }).then(() => {
            console.log('new log added')
        })
    
    }

   
    return (
     <div className="logform">
        <h2>Enter a new surf report below!</h2>
            <form onSubmit={handleSubmit}>
            <label>date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            
            <label>Time </label>
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="Morning">Morning</option>
                    <option value="Midday">Midday</option>
                    <option value="Evening">Evening</option>
                </select>
                {/* <input type="time" id="stop" /> */}
            {/* <label>Stop</label>
                <input type="time" id="stop" /> */}

            {/* <label>Session Length</label>
                <input type="text" /> */}
            <label>Swell Size </label>
                <select value={swell} onChange={(e) => setSwell(e.target.value)} >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="OverHead">Over Head</option>
                </select>

            <label>Session Notes</label>
                <input type="length" value={note} onChange={(e) => setNote(e.target.value)}/>

                <button> Add Session </button>
            </form>
    </div>
    )
}
export default LogForm