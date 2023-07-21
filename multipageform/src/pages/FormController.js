import { useState } from "react";
import { FormModel, PAGE } from "../model/FormModel";
import ServiceForm from './ServiceForm';
import DatesForm from './DatesForm';
import PersonalForm from './PersonalForm';
import Summary from './Summary';
import Confirmation from './Confirmation';

import { Route, Routes} from 'react-router-dom';
import ProgressBar from "../components/ProgressBar";    
import NavigationButtons from "../components/NavigationButtons";

/*
State lift:
1) Current page (currentPage) - tells the controller which page the user is at the moment.
    |-> Allows the correct render of NEXT|BACK|CONFIRM|HOME buttons (<NavigationButtons> compoment)
    |-> Updates the progress bar
2) Form ready flag (isFormComplete) - tells the controller if a form page has been completed.
    |-> Enable/Disable the NEXT button (<NavigationButtons> component)

3) User input data (userInput)    
    |-> Each form updates the data structure with all the input data with its own relevant part

*/

function FormController(){
    const [userInput, setUserInput] = useState(FormModel);                   //State that holds what the user has input in the forms
    const [currentPage, setCurrentPage] = useState(PAGE.SERVICE);           //State that tracks the current page
    const [isFormComplete, setIsFormComplete] = useState(false);            //State flag that indicates if a form has been completed
    
    const getProps = ()=>{
        return(
            {
                updateCurrentPage: setCurrentPage,
                setIsFormComplete: setIsFormComplete,
                userInput: userInput,
                setUserInput: setUserInput
            }
        )
    }

    return(
        <div className="form-controller-container">            
            <ProgressBar currentPage={currentPage}/>        
            <Routes>
                    <Route path="/" element={<ServiceForm {...getProps()}/>}/>
                    <Route path="/service" element={<ServiceForm {...getProps()}/>}/>
                    <Route path="/dates" element={<DatesForm {...getProps()}/>}/>
                    <Route path="/personal" element={<PersonalForm {...getProps()}/>}/>
                    <Route path="/summary" element={<Summary {...getProps()}/>}/>
                    <Route path="/confirmation" element={<Confirmation {...getProps()}/>}/>
            </Routes>                   
            <NavigationButtons currentPage={currentPage} isFormComplete={isFormComplete}/>                                        
        </div>
    )
}

export default FormController;