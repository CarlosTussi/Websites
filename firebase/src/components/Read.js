import { useEffect, useState } from "react";

import {collection, query, where, getDocs } from "@firebase/firestore"
import  {db, collection_name}  from '../services/firebase.config'

function Read()
{
    const dataCollection = collection(db, collection_name);

    const [name, setName] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const [searchData, setSearchData] = useState(false);

    const [receivedData, setReceivedData] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        setReceivedData([]); //Reset data array for new search
        setSearchData(true);
    }

    const searchAll = () => {

    } 
    
    useEffect(()=>{
        if(searchData === true)
        {
            console.log('Name: ', name);
            console.log('Selected Option:', selectedOption);

            //Creating a WHERE clause query
            const q = query(dataCollection, where("name", "==", name));
            const data = [];

            getDocs(q)
                .then(places => {
                    places.forEach(venue => {
                        console.log("Data: ", venue.data());
                        console.log("Id: ", venue.id);

                        setReceivedData((oldArray) => [...oldArray, {id: venue.id, data: venue.data()}]);

                    })
                })
                .then(setSearchData(false))             
            
                
        }

        
        
    }, [dataCollection, name, searchData, selectedOption, receivedData, setReceivedData]);

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
            <div className="results">
                <ul>                     
                    {receivedData.map((item, index) => (
                        <li key={index}>
                            <p>#: {item.id}</p>
                            <p>Name: {item.data.name}</p>
                            <p>Type: {item.data.type}</p>
                            <p>Address: {item.data.address}</p>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Read;