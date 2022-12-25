import FullSection from "./FullSection";
import {useFormik, yupToFormErrors} from "formik";
import * as Yup from "yup";
import { FormControl, 
         FormErrorMessage, 
         FormLabel, 
         Input, 
         Heading, 
         Select, 
         Textarea,
         Button, } from "@chakra-ui/react";

function ContactSection()
{
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            topic: "",
            comment:"",
        },
    
        onSubmit: (data) => { 
            //to do
        },
    
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            topic: Yup.string().required(),
            comment: Yup.string().min(10).required(),    
        }),
    })

    return(
        <FullSection 
                padding="0 0 10em 0"
                id="contact"
        >
            <Heading>Reach Out</Heading>
                <form onSubmit={formik.handleSubmit}>
                    {/* Name */}
                    <FormControl isInvalid={formik.touched.name && formik.errors.hasOwnProperty("name")}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input 
                            id="name"
                            name="name"
                            width="50vw"
                            focusBorderColor="#39FF14"
                            {...formik.getFieldProps("name")}/>                        
                        <FormErrorMessage>Name required</FormErrorMessage>
                    </FormControl>
                    {/* Email */}
                    <FormControl isInvalid={formik.touched.email && formik.errors.hasOwnProperty("email")}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input 
                            id="email"
                            name="email"
                            focusBorderColor="#39FF14"
                            {...formik.getFieldProps("email")}/>
                            <FormErrorMessage>Invalid email address</FormErrorMessage>
                    </FormControl>
                    {/* Topic */}
                    <FormControl isInvalid={formik.touched.topic && formik.errors.hasOwnProperty("topic")}>
                        <FormLabel htmlFor="topic">Topic</FormLabel>
                        <Select
                            id="topic"
                            name="topic"
                            focusBorderColor="#39FF14"
                            {...formik.getFieldProps("topic")}>
                                <option value="freelance">Freelance Projects</option>
                                <option value="feedback">Suggestions</option>
                                <option value="colabs">Partnership</option>
                                <option value="other">Other</option>
                        </Select>
                        <FormErrorMessage>Please chose a topic</FormErrorMessage>                        
                    </FormControl>
                    {/* Comment */}
                    <FormControl isInvalid={formik.touched.comment && formik.errors.hasOwnProperty("comment")}>
                        <FormLabel htmlFor="comment">Comment</FormLabel>
                        <Textarea 
                            id="comment"
                            name="comment"
                            height="20em"
                            focusBorderColor="#39FF14"
                            resize="none"
                            {...formik.getFieldProps("commnet")}/>
                            <FormErrorMessage>Minimum 10 characters</FormErrorMessage>
                    </FormControl>
                    {/* Submit Button */}
                    <Button type="submit" 
                            width="full"
                            colorScheme="green"
                            >Submit</Button>
                </form>
        </FullSection>
    );
}

export default ContactSection;