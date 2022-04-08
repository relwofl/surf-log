import React from "react"

function LogForm(){
    return (
     <div>
        <form>
            <h1>Enter a new surf report below!</h1>
            <label>Start</label>
                <input type="time" id="time" />
            <label>Stop</label>
                <input type="time" id="time" />

            <label>Session Length</label>
                <input type="session" id="session" />

            <label>Session Notes</label>
                <input type="length" id="duration" />

            <label>Surf Size
                <select>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="OverHead">Over Head</option>
                </select>
            </label>
        </form>
    </div>
    )
}
export default LogForm