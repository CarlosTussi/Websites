import { useEffect, useState } from "react";

import  {db, collection_name}  from '../services/firebase.config'
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "@firebase/firestore"

function Register()
{
    const [customerData, setCustomerData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    const [dataSubmited, setDataSubmited] = useState(false);

    const usersCollectionRef = collection(db, collection_name);

    const toggleDataSubmited = () => {
        setDataSubmited(!dataSubmited);
    }

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        //Will force useEffect to be executed sending data to backend
        toggleDataSubmited();
        console.log(customerData);
    }

    useEffect(() => {

        //Avoid the first render
        if(dataSubmited === true){
            console.log("Sending the data to backend!");
            
            addDoc(usersCollectionRef, customerData);



            toggleDataSubmited();
        }

    }, [dataSubmited, toggleDataSubmited]);

 

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={customerData.name}
                    onChange={handleChange}
                    /> 
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input 
                type="number"
                id="age"
                name="age"
                value={customerData.age}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={customerData.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input 
                type="number"
                id="phone"
                name="phone"
                value={customerData.phone}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register;