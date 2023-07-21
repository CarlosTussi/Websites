import { useEffect } from "react";
import { useFormik, } from 'formik';
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import { DEFAULT_OPTION, PAGE, SERVICE_OPTION } from "../model/FormModel";


function ServiceForm(props)
{
     /* INITIAL useEffect */
    //Will lift the state up to inform FormController what is the current page and the status of the next button
    useEffect(() => {
                    props.updateCurrentPage(PAGE.SERVICE);
                    //Lift the state to indicate the form is not completed. Indicate NEXT button will be disabled. 
                    props.setIsFormComplete(false);
            }
        )

    /* FORMIK DECLARATION */
    const formik  = useFormik({
        initialValues: {
            serviceType: props.userInput.service,
        },
        validationSchema: Yup.object({
            serviceType: Yup.string().required('Please select a service').test("not-default", "Error message", function(value){
                return !(value===DEFAULT_OPTION);
            }),
        }),
    });


   /* CHECKS IF FORM IS COMPLETE AND UPDATE User Input MODEL (lift state) */ 
    useEffect(()=>{
        const service_input_value = formik.getFieldProps("serviceType").value

        //Signals that the user has chosen an option and update the User Input object with relevant 
        //information about the service
        if( service_input_value!== DEFAULT_OPTION){
            props.setIsFormComplete(true);   
            //Avoid infinite loop making sure that the variable only updates if it changes
            if(props.userInput.service !== service_input_value)
                props.setUserInput({...props.userInput, service: service_input_value})                             
        }                        
    },[formik])  

      
    return(
       <form className="service-form" onSubmit={formik.handleSubmit}>
        <h4 htmlFor="serviceType">SERVICE TYPE </h4>
        <select 
            id="serviceType" 
            name="serviceType"
            {...formik.getFieldProps("serviceType")}                                             
            >
            <option defaultValue="">{DEFAULT_OPTION}</option>
            {SERVICE_OPTION.map((service) => (
            <option key={service.value} value={service.value}>
            {service.label}
            </option>
        ))}
        </select>
        <ErrorMessage isDisplayed={(formik.touched.serviceType &&
                                    formik.getFieldProps("serviceType").value === DEFAULT_OPTION)}
        >
                Please Select a valid service to continue.
        </ErrorMessage>
       </form>
    )
}

export default ServiceForm; 