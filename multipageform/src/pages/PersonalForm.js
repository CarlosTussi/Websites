import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { COUNTRIES } from "../model/CountryList";
import ErrorMessage from "../components/ErrorMessage";
import { PAGE, ID_TYPES } from "../model/FormModel";


const todayDate = new Date();
function PersonalForm(props){
    
    /* INITIAL useEffect */

    //Will lift the state up to inform FormController what is the current page and the status of the next button
    useEffect(() => {        
        props.updateCurrentPage(PAGE.PERSONAL)

        //If form not complete, flag to DISABLE NEXT BUTTON
        if(!Object.keys(formik.touched).length)
            props.setIsFormComplete(false);

        //If form is complete, flag to ENABLE NEXT BUTTON. Check if
        if(formik.isValid && Object.values(formik.values).every((value) => value !== ''))
            props.setIsFormComplete(true);
    })
    

    /* FORMIK DEFINITION */
    const formik = useFormik({
        initialValues: {
            firstName: props.userInput.personal_details.first_name,
            lastName: props.userInput.personal_details.last_name,
            dob: props.userInput.personal_details.dob,
            idType: props.userInput.personal_details.id_type,
            idNumber: props.userInput.personal_details.id_number,
            nationality: props.userInput.personal_details.nationality,
            email: props.userInput.personal_details.email,
            countryCode: props.userInput.personal_details.country_code,
            phone: props.userInput.personal_details.phone,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please inform your First Name'),
            lastName: Yup.string().required('Please inform yur Last Name'),
            dob: Yup.date().max(todayDate).required().test("not-default", "Error message", function(value){
                return !(value === ""); //Will flag that default date (empty) is an error (not a valid input)
            }),
            idType: Yup.string().required(),
            idNumber: Yup.string().required(),
            nationality: Yup.string().required(),
            email: Yup.string().required().email(),
            countryCode: Yup.string().required(),
            phone: Yup.string().required()
        })
    })    


    /*FIX FOR DETECTING "TOUCH" WITH DATE INPUT FIELD (HTML handles it differently)*/ 
    // Manually set the "touched" state when the date input is blurred    
    const handleDateBlur = () => {        
        formik.setFieldTouched('dob', true, true);
        
      };

      /*CHECKS IF FORM IS COMPLETE AND UPDATE User Input MODEL (lift state)*/ 
      useEffect(() =>{
        //If form is complete, update all the personal information from the User Input state (lifiting state)
        if(Object.keys(formik.touched).length > 0 && formik.isValid)
        {   
            //Detect that the form is complete
            props.setIsFormComplete(true);     
            
            const updatedValues = formik.values;
    
            //Update personal information of the user input
            props.setUserInput({
                        ...props.userInput,
                        personal_details:{
                            first_name: updatedValues.firstName,
                            last_name: updatedValues.lastName,
                            dob: updatedValues.dob,
                            id_type: updatedValues.idType,
                            id_number: updatedValues.idNumber,
                            nationality: updatedValues.nationality,
                            email: updatedValues.email,
                            country_code: updatedValues.countryCode,
                            phone: updatedValues.phone,
                        }
                    })
        }
        else    
            //If form not complete, just to make sure it remains  disable the button
            props.setIsFormComplete(false);

      },[formik.isValid, formik.touched, formik.values]) //Do not include props (infinite loop)


    return(        
        <form className="personal-form-container">  
            <h4>PERSONAL DETAILS</h4>      
            <legend>*All fields are mandatory</legend>    
            {/* PERSONAL DETAIL CONTAINER */}
            <div className="bio-details-container">
                {/* First Name */}
                <label htmlFor="firstName">First Name*</label>
                <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    {...formik.getFieldProps("firstName")}                      
                />
                <ErrorMessage isDisplayed={formik.touched.firstName &&
                                           formik.errors.hasOwnProperty("firstName")}>
                                            Please enter your first name.
                </ErrorMessage>
                {/* Last Name */}
                <label htmlFor="LastName">Last Name*</label>
                <input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    {...formik.getFieldProps("lastName")}                                        
                />
                <ErrorMessage isDisplayed={formik.touched.lastName &&
                                           formik.errors.hasOwnProperty("lastName")}>
                    Please enter your last name.
                </ErrorMessage>
                {/* DOB */}
                <label htmlFor="dob">Date of Birth*</label>
                <input 
                    type="date"
                    id="dob"
                    name="dob"                    
                    required
                    {...formik.getFieldProps("dob")}
                    onBlur={handleDateBlur} // Override onBlur method from formik                    
                />
                <ErrorMessage isDisplayed={formik.touched.dob &&
                                           formik.errors.hasOwnProperty("dob")}>
                    Please enter a valid date of birth.
                </ErrorMessage>
            </div>
            {/* ID DETAILS CONTAINER */}
            <div className="id-details-container">
                {/* Id type and Id number */}
                <div className="id-type-number-container">
                    <div className="id-type-container">
                        <label htmlFor="idType">ID Type*</label>
                        <select
                        id="idType"
                        name="idType"
                        {...formik.getFieldProps("idType")}                        
                        required
                        >
                        <option defaultValue=""></option>
                        {ID_TYPES.map((type) => (  
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}   
                        </select>
                        <ErrorMessage isDisplayed={formik.touched.idType &&
                                                   formik.errors.hasOwnProperty("idType")}>
                                Please enter an ID type.
                        </ErrorMessage>
                    </div>
                    <div className="id-number-container">
                        <label htmlFor="idNumber">ID Number*</label>
                        <input 
                            type="text"
                            id="idNumber"
                            name="idNumber"
                            {...formik.getFieldProps("idNumber")}                            
                            required
                        />
                        <ErrorMessage isDisplayed={formik.touched.idNumber &&
                                                   formik.errors.hasOwnProperty("idNumber")}>
                            Please enter an ID number.
                        </ErrorMessage>
                    </div>                    
                </div>      
                {/* Nationality */}
                <label htmlFor="nationality">Nationality*</label>
                <select
                        id="nationality"
                    name="nationality"
                    {...formik.getFieldProps("nationality")}                    
                    required
                >
                    <option defaultValue=""></option>
                    {COUNTRIES.map((country) => (
                        <option key={country.name}>
                            {country.name}
                        </option>
                    ))}

                </select>
                <ErrorMessage isDisplayed={formik.touched.nationality &&
                                           formik.errors.hasOwnProperty("nationality")}>
                    Please enter your nationality.
                </ErrorMessage>
            </div>
            {/* CONTACT DETAILS CONTAINER */}
            <div className="contact-details-container">
                {/* Email */}
                <label htmlFor="email">Email*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}                     
                    required
                />
                <ErrorMessage isDisplayed={formik.touched.email &&
                                            formik.errors.hasOwnProperty("email")}>
                    Please enter a valid email address.
                </ErrorMessage>
                {/* Countrycode and phone number */}
                <div className="countrycode-phone-container">
                    <div className="countrycode-container">
                    <label>Country Code*</label>
                    <select
                        type="text"
                        id="countryCode"
                        namse="countryCode"
                        {...formik.getFieldProps("countryCode")}                          
                        required
                        >s
                            <option defaultValue=""></option>
                            {COUNTRIES.map((country) => (
                                <option key={country.name}>
                                    {country.name} +{country.phone}
                                </option>
                            ))}
                        </select>
                        <ErrorMessage isDisplayed={formik.touched.countryCode &&
                                            formik.errors.hasOwnProperty("countryCode")}>
                                    Please enter the country code.
                        </ErrorMessage>
                    </div>
                    <div className="phone-container">
                    <label>Phone*</label>
                        <input 
                            type="text" 
                            id="phone"
                            name="phone"
                            {...formik.getFieldProps("phone")}                             
                            required    
                        />
                        <ErrorMessage isDisplayed={formik.touched.phone &&
                                            formik.errors.hasOwnProperty("phone")}>
                            Please enter your phone number.
                        </ErrorMessage>
                    </div>
                        
                </div>
            </div>  
            <legend>*Fill up all the fields to continue</legend>       
        </form>
    )
}

export default PersonalForm;