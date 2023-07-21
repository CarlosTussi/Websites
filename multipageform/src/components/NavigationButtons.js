import { Link } from "react-router-dom";
import { PAGE } from "../model/FormModel";



//Switch that returns the correct path for the BACK and NEXT buttons according to the currentPage
const updateLinks = (currentPage)=>{
    switch(currentPage){
        case PAGE.SERVICE:
            return {
                back:'/',
                next:'/dates'
            };
        case PAGE.DATE:
            return {
                back:'/service',
                next:'/personal'
            };
        case PAGE.PERSONAL:
            return {
                back:'/dates',
                next:'/summary'
            };
        case PAGE.SUMMARY:
            return {
                back:'/personal',
                next:'/confirmation'
            };
        case PAGE.CONFIRMATION:
            return {
                back:'null',
                next:'/'
            };
        default:
            return;
    }
}

/* Depending on the current page (props.currentPage) adjust the buttons content accordingly together
with the path to the right component.*/
function NavigationButtons(props)
{
    const links = updateLinks(props.currentPage);
    return(
        <>        
         <div className="back-next-buttons-container">         
                {/* CANCEL button - first form page only */}
                {props.currentPage === PAGE.SERVICE ? 
                <Link to='/'><button className="cancel-button">CANCEL</button></Link> : ""}
                {/* BACK button - for all the pages except first and last */}
                {props.currentPage !== PAGE.SERVICE && props.currentPage !== PAGE.CONFIRMATION ? 
                <Link to={links.back}><button className="back-button">BACK</button></Link> : ""}
                {/* NEXT button - For the intermmediate pages except the summary page                
                    - Enables and Disables the NEXT button  accordingly (props.isFormComplete)

                    CONFIRM button - For the summary page only
                */}
                {props.currentPage !== PAGE.CONFIRMATION && props.currentPage !== PAGE.SUMMARY ?                 
                    props.isFormComplete ? <Link to={links.next}><button className="next-button">NEXT</button></Link> : 
                                                                 <button className="next-button disabled">NEXT</button>
                 : 
                 props.currentPage === PAGE.SUMMARY ?  <Link to={links.next}><button className="next-button">CONFIRM</button></Link>:
                 ""}
                {/* HOME button - for the confirmation page only*/}
                {props.currentPage === PAGE.CONFIRMATION ? 
                <Link to='/'><button className="home-button">HOME</button></Link> : ""}
            </div>
        </>
    )
}

export default NavigationButtons;