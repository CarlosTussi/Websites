import FullScreen from "./FullScreen";
import {useFormik, } from "formik";
import * as Yup from "yup";
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack, Heading, } from "@chakra-ui/react";
import UIButton from "./UIButton";
import * as GUIDE from "../styleguide/colorscheme";

import { usePopUpContext } from "../contexts/PopUpProvider";

function ContactPage()
{
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        onSubmit: (data) => {
            openPopUp("standard", "Form still under construction...")   
        },

        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            message: Yup.string().min(10).required(),
        }),

    })

    const {openPopUp} = usePopUpContext();

    return(<>
        <FullScreen id="contactme">
            <VStack m="0 5vh 0 5vh"
                    spacing="5vh">
                <Heading>Reach Out</Heading>            
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.touched.name && formik.errors.hasOwnProperty("name")}
                                 p="2vh 0 0 0" 
                    >
                        <FormLabel htmlFor="name">Name*</FormLabel>                        
                        <Input id="name"
                            name="name"
                            width="80vw"                            
                            errorBorderColor= {GUIDE.color.secondary}                  
                            {...formik.getFieldProps("name")}
                                />
                        <FormErrorMessage color={GUIDE.color.errorText}>Name Required</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.email && formik.errors.hasOwnProperty("email")}
                                 p="2vh 0 0 0"
                                    >
                        <FormLabel htmlFor="email">Email*</FormLabel>
                        <Input id="email"
                            name="email"
                            width="80vw"       
                            errorBorderColor= {GUIDE.color.secondary}                     
                            {...formik.getFieldProps("email")}
                                />
                        <FormErrorMessage color={GUIDE.color.errorText}>Invalid Email Format</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.message && formik.errors.hasOwnProperty("message")}
                                     p="2vh 0 0 0">
                        <FormLabel htmlFor="message">Message*</FormLabel>
                        <Textarea
                                id="message"
                                name="message"
                                height="35vh"
                                width="80vw"
                                resize= "none"    
                                errorBorderColor= {GUIDE.color.secondary}                              
                            {...formik.getFieldProps("message")}
                                />
                        <FormErrorMessage color={GUIDE.color.errorText}>Must be at least 10 characters</FormErrorMessage>
                    </FormControl>
                    <p>* Required Fields</p>
                    <UIButton width="full" type="submit">Submit</UIButton>
                </form>                
            </VStack>
        </FullScreen>
    </>);
}

export default ContactPage;