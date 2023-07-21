import { useEffect } from "react";
import { PAGE } from "../model/FormModel";
import { Link } from "react-router-dom";


function Summary(props)
{
    useEffect(() => {props.updateCurrentPage(PAGE.SUMMARY)})
    return(
        <div className="summary-container">
            <h4>APPOINTMENT SUMMARY</h4>
            <div className="section-summary-container">
                <h5>Service</h5>
                <Link to='/service'><button className="edit-button">edit</button></Link>
                <div className="content-summary-container">
                    <p className="summary-data">{props.userInput.service.charAt(0).toUpperCase() + 
                        props.userInput.service.slice(1)}</p>
                </div>
            </div>
            <div className="section-summary-container">
                <h5>Date and Time</h5>
                <Link to='/dates'><button className="edit-button">edit</button></Link>
                <div className="content-summary-container">
                    <p className="summary-data">{
                        props.userInput.date_time.date.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        }</p>
                    <p className="summary-data">{props.userInput.date_time.time}</p>
                </div>
            </div>
            <div className="section-summary-container">
                <h5>Personal Information</h5>
                <Link to='/personal'><button className="edit-button">edit</button></Link>
                <div className="content-summary-container">
                    <div className="personal-info-summary-container">
                            <p>First Name: <span className="summary-data">{props.userInput.personal_details.first_name}</span></p>                        
                            <p>Last Name: <span className="summary-data">{props.userInput.personal_details.last_name}</span></p>                        
                            <p>Date of Birth: <span className="summary-data">{props.userInput.personal_details.dob}</span></p>       
                            <p>Id Type: <span className="summary-data">{props.userInput.personal_details.id_type}</span></p>       
                            <p>Id Number: <span className="summary-data">{props.userInput.personal_details.id_number}</span></p>  
                            <p>Nationality: <span className="summary-data">{props.userInput.personal_details.nationality}</span></p>                        
                            <p>Email: <span className="summary-data">{props.userInput.personal_details.email}</span></p>                        
                            <p>Country Code: <span className="summary-data">{props.userInput.personal_details.country_code}</span></p>                        
                            <p>Phone: <spa className="summary-data"n>{props.userInput.personal_details.phone}</spa></p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;