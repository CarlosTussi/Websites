import { useEffect, useState } from "react";

import {collection, query, where, getDocs } from "@firebase/firestore"
import  {db, collection_name}  from '../services/firebase.config'



function Fetchdata({onDataReceived})
{
    const dataCollection = collection(db, collection_name);

    const [name, setName] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    
    //useEffect flag
    const [searchData, setSearchData] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        setSearchData(true);
    }
    
    useEffect(()=>{
        if(searchData === true)
        {
            //Creating a WHERE clause query
            const q = query(dataCollection, where("name", "==", name));
            let data = [];

            getDocs(q)
                .then(places => {
                    places.forEach(venue => {

                        data = [...data, {id: venue.id, data: venue.data()}];                       
                    })
                })
                .then(() => {
                        onDataReceived(data);
                        setSearchData(false);
                    });                                                                      
        }                
    }, [dataCollection, name, searchData, selectedOption, onDataReceived]);

    return(
        <div className="read-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                            />
                </div>
                <div>
                    <label>Restaurant Name</label>
                    <input 
                        type="radio"
                        value="restaurant"
                        checked={selectedOption === 'restaurant'}
                        onChange={handleOptionChange}
                    />
                    <label>Restaurant Type</label>
                    <input
                        type="radio"
                        value="type"
                        checked={selectedOption === 'type'}
                        onChange={handleOptionChange}
                    />
                </div>
                <button type="submit">Search</button>                               
            </form>
        </div>
    )
}

export default Fetchdata;