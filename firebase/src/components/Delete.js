import { useEffect, useState } from "react";
import Read from "./Read";
import Child from "../Child";
import Fetchdata from "./Fetchdata";

function Delete()
{
    const [dataReceived, setDataReceived] = useState([]);    

    const handleDataReceived = (childData) => {        
        setDataReceived(childData);                    
    }

    /**
     DELETE operation  [[NOT TESTED!]]
      
     (inside use effect and use .then if needed)
     deleteDoc(doc(db, collection_name, id))
     
     */


    return(
        <div>
            {/* <Read /> */}
           <Fetchdata onDataReceived={handleDataReceived} />           
            <ul>
                {dataReceived.map((item,index) => (
                    <li key={index}>
                    <p>#: {item.id}</p>
                    <p>Name: {item.data.name}</p>
                    <p>Type: {item.data.type}</p>
                    <p>Address: {item.data.address}</p>
                    <br/>
                </li>
                ))}
            </ul>            
        </div>
    )
}

export default Delete;