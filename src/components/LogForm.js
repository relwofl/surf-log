
function LogForm(){
    return (
     <div className="logform">
        <h2>Enter a new surf report below!</h2>
            <form>
            <label>date</label>
                <input type="date" />
                <label>Time </label>
                <select>
                    <option value="Morning">Small</option>
                    <option value="Midday">Medium</option>
                    <option value="Evening">Over Head</option>
                </select>
                {/* <input type="time" id="stop" /> */}
            {/* <label>Stop</label>
                <input type="time" id="stop" /> */}

            {/* <label>Session Length</label>
                <input type="text" /> */}

            <label>Session Notes</label>
                <input type="length" id="duration" />

            <label>Swell Size </label>
                <select>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="OverHead">Over Head</option>
                </select>
         <button> Add Session </button>
        </form>
    </div>
    )
}
export default LogForm