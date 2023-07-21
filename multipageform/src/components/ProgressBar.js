import ProgressBarCard from "./ProgressBarCard";
import { PAGE } from "../model/FormModel";

function ProgressBar(props)
{
    return(
        <div>     
            <div className="line"></div>       
            <div className="progressbar-container">
                <ProgressBarCard number="1" 
                                 section="Service" 
                                 current={props.currentPage === PAGE.SERVICE} 
                                 completed={props.currentPage !== PAGE.SERVICE}/>                   
                
                <ProgressBarCard number="2" 
                                 section="Date and Time"
                                 current={props.currentPage === PAGE.DATE}
                                 completed={(props.currentPage !== PAGE.SERVICE && props.currentPage!== PAGE.DATE) ? true : false}/>                             
               
                <ProgressBarCard number="3" 
                                 section="Personal Details"
                                 current={props.currentPage === PAGE.PERSONAL}
                                 completed={props.currentPage === PAGE.SUMMARY || props.currentPage === PAGE.CONFIRMATION}/>
            </div>            
        </div>
    )
}

export default ProgressBar;