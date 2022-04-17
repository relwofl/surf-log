import { useParams } from "react-router-dom"

function SingleLog() {
    const { id } =  useParams
 return (
     <div className="single-log">
         <h2>Session - { id }</h2>
     </div>
 )   
}
export default SingleLog