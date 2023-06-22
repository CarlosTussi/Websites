import { useEffect, useState } from "react";

import {collection, addDoc } from "@firebase/firestore"
import  {db, collection_name}  from '../services/firebase.config'

function Create()
{
    //Which collection from db we are going to add the data
    const dataCollection = collection(db, collection_name);


    const [entryData, setEntryData] = useState({
        name: "",
        type: "",
        address: ""
    });

    const [submitData, setSubmitData] = useState(false);        
    
    const handleChange = (e) => {
        setEntryData({
            ...entryData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData(true);
    }

    useEffect(() => {
        //Will only try to submit when submit button is pressed
        if(submitData === true){

            addDoc(dataCollection, entryData);
            console.log("Submitted");

            setSubmitData(false);
        }
    }, [submitData, setSubmitData, dataCollection, entryData]);

    return(
        <div className="create-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={entryData.name}
                        onChange={handleChange}
                         />
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        name="type"
                        id="type"
                        value={entryData.type}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text"
                    id="address"
                    name="address"
                    value={entryData.address}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create;