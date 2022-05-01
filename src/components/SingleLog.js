import { useParams } from "react-router-dom"

function SingleLog() {
    const { id } =  useParams()
 return (
     <div className="single-log">
         <h2>Session - { id }</h2>
     </div>
 )   
}
export default SingleLog
// // think I would need to add below to capture id 
//     <Link to={ '/logs/${log.id}' }>
//         with everything that is displayed to the page here 
//         </Link>
// then need to fetch here... hmm