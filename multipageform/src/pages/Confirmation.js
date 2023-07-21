import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PAGE } from "../model/FormModel";

function Confirmation(props)
{
    useEffect(() => {props.updateCurrentPage(PAGE.CONFIRMATION)})
    return(
        <>
            Confirmation            
            {/* <div className="back-next-buttons-container">                
                <Link to="/"><button className="next-button">HOME</button></Link>
            </div>    */}
        </>
    )
}

export default Confirmation;