import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PAGE } from "../model/FormModel";


function Summary(props)
{
    useEffect(() => {props.updateCurrentPage(PAGE.SUMMARY)})
    return(
        <>
            summary            
            {/* <div className="back-next-buttons-container">
                <Link to="/personal"><button className="back-button">BACK</button></Link>            
                <Link to="/confirmation"><button className="next-button">CONFIRM</button></Link>
            </div>         */}
        </>
    )
}

export default Summary;