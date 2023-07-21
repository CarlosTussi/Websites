import { useEffect, useState } from "react";
// import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { PAGE, TIME_SLOTS } from "../model/FormModel";

function DatesForm(props)
{

    const [date, setDate] = useState(props.userInput.date_time.date);
    const [timeslot, setTimeslot] = useState("");

    /* INITIAL useEffect */
    useEffect(() => {
        props.updateCurrentPage(PAGE.DATE)
        //If no time slot has been selected, do not let the user continue
        if(props.userInput.date_time.time === "")
            props.setIsFormComplete(false);
        //If user has previously selected a time slot
        else
            props.setIsFormComplete(true);

    })


    const handleDateChange = (newDate) => {
        setDate(newDate);
    }

    /* Custom color for Calendar component tiles */
    const tileClassName = ({date}) => {
        //If date older
        if(date < new Date()){
            return 'old-date';
        }
        else if(date.getDay() !== 0 && date.getDay() !== 3){
            return 'available-date'
        }
        else
            return 'unavailable-date'
    }

    /* Formatting Date() */
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      /* CHECKS IF FORM IS COMPLETE AND UPDATE RELEVANT PART OF User Input*/
      useEffect(() => {
        if(timeslot !== ""){
            props.setIsFormComplete(true);

            //Update User Input with Date and Time
            //Condition to avoid infinite loop
            if(props.userInput.date_time.date !== date ||
               props.userInput.date_time.time !== timeslot)
                props.setUserInput({...props.userInput, date_time: {date: date, time: timeslot}})
        }        
      },[date, props, timeslot])

      const handleRadioChage = (event) =>{
            setTimeslot(event.target.value);

            console.log("time slot: ", timeslot);
      }

    return(
        <div className="date-form-container">
            <h4>SELECT AN AVAILABLE DATE</h4>
            <p>{props.userInput.service.charAt(0).toUpperCase() + props.userInput.service.slice(1)}</p>
            <Calendar className="react-calendar" onChange={handleDateChange} 
                      value={date}
                      tileClassName={tileClassName} />              
            <h4>SELECT APPOINTMENT TIME</h4>
            <p>{formattedDate}</p>
            <div className="time-slot-container">
            {TIME_SLOTS.map((option, index) => (
                    <>
                    <input 
                        type="radio"
                        name="radio-option"
                        id={`option-${index}`}
                        value={option}
                        onChange={handleRadioChage}
                        className="time-slot-radio"
                        defaultChecked={option === props.userInput.date_time.time}                        
                    />          
                    <label htmlFor={`option-${index}`}>{option}</label>
                    </>
                  ))}            
            </div>
        </div>
    )
}

export default DatesForm;