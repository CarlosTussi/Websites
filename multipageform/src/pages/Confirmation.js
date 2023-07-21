import { useEffect } from "react";
import { PAGE } from "../model/FormModel";

function Confirmation(props)
{
    useEffect(() => {props.updateCurrentPage(PAGE.CONFIRMATION)})
    return(
        <div className="confirmation-container">
            <h4>APPOINTMENT CONFIRMATION</h4>
            <p>Your appointment has been confirmed</p>
            <div className="reference-number-container">
                <h5>Reference Number</h5>
                <p>#V142423</p>
            </div>
            <div className="confirmation-details-container">
                <h5>Appointment Details</h5>
                <div className="service-time-confirmation-container">
                    <p>{props.userInput.service.charAt(0).toUpperCase() + 
                        props.userInput.service.slice(1)}</p>
                    <p>{props.userInput.date_time.date.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}</p>
                    <p>{props.userInput.date_time.time}</p>
                </div>
                <div className="personal-confirmation-container">
                    <p>First Name: <span className="personal-confirmation-data">{props.userInput.personal_details.first_name}</span></p>                        
                    <p>Last Name: <span className="personal-confirmation-data">{props.userInput.personal_details.last_name}</span></p>                        
                    <p>Date of Birth: <span className="personal-confirmation-data">{props.userInput.personal_details.dob}</span></p>       
                    <p>Id Type: <span className="personal-confirmation-data">{props.userInput.personal_details.id_type}</span></p>       
                    <p>Id Number: <span className="personal-confirmation-data">{props.userInput.personal_details.id_number}</span></p>  
                    <p>Nationality: <span className="personal-confirmation-data">{props.userInput.personal_details.nationality}</span></p>                        
                    <p>Email: <span className="personal-confirmation-data">{props.userInput.personal_details.email}</span></p>                        
                    <p>Country Code: <span className="personal-confirmation-data">{props.userInput.personal_details.country_code}</span></p>                        
                    <p>Phone: <span className="personal-confirmation-data">{props.userInput.personal_details.phone}</span></p>
                </div>
            </div>
            
        </div>
    )
}

export default Confirmation;