import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LogForm(){
    const [ date, setDate] = useState("")
    const [ time, setTime] = useState("Morning")
    const [ swell, setSwell] = useState("Small")
    const [ note, setNote] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()

   function handleSubmit (e) {
    e.preventDefault()
    const post = { title, date, time, note, swell}
    fetch('http://localhost:3001/surflogs', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
        }).then(() => {
            history.push('/Logs')
        })
    
    }

   
    return (
     <div className="logform">
        <h2>Enter a new surf report below!</h2>
            <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            
            <label>Time </label>
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="Morning">Morning</option>
                    <option value="Midday">Midday</option>
                    <option value="Evening">Evening</option>
                </select>
               
            <label>Swell Size </label>
                <select value={swell} onChange={(e) => setSwell(e.target.value)} >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="OverHead">Over Head</option>
                </select>

            <label>Session Notes</label>
                <textarea type="text" value={note} onChange={(e) => setNote(e.target.value)}/>

                <button> Add Session </button>
            </form>
    </div>
    )
}
export default LogForm