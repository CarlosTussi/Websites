import { useEffect, useState } from "react";

import {collection, query, where, getDocs, doc, updateDoc } from "@firebase/firestore";
import  {db, collection_name}  from '../services/firebase.config';


function Update()
{
    const dataCollection = collection(db, collection_name);

    const [name, setName] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const [searchData, setSearchData] = useState(false);

    const [receivedData, setReceivedData] = useState([]);


    // FOR UPDATE
    const [updateEntry, setUpdateEntry] = useState({
        id: "",
        name: "",
        address: "",
        type: ""
    });

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

    const handleUpdate = (e) => {
        e.preventDefault();

        console.log(updateEntry.id);

        updateDoc(doc(db, collection_name, updateEntry.id), {
            name: updateEntry.name,
            address: updateEntry.address,
            type: updateEntry.type
        });
    }
    
    useEffect(()=>{
        if(searchData === true)
        {
            console.log('Name: ', name);
            console.log('Selected Option:', selectedOption);

            //Creating a WHERE clause query
            const q = query(dataCollection, where("name", "==", name));

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

    const handleClick = (e) => {
        console.log(e.target.closest('li'));
        const list_items = e.target.closest('li');
        const paragraphs = list_items.querySelectorAll('p');

        setUpdateEntry({
            id: paragraphs[0].textContent,
            name: paragraphs[1].textContent,
            address: paragraphs[2].textContent,
            type: paragraphs[3].textContent,
        });
        
    }

    return(
        <div className="read-container">
            <div>
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
                <form className="update-form" onSubmit={handleUpdate}>
                    <div>
                         <label>Id: {updateEntry.id}</label>                        
                    </div>
                    <div>
                        <label>Name: </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={updateEntry.name}
                            onChange={(e)=> setUpdateEntry({
                                ...updateEntry,
                                [e.target.name]: e.target.value
                            })}
                         /> 
                    </div>
                    <div>
                        <label>Address: </label>
                        <input 
                            type="text"
                            name="address"
                            id="address"
                            value={updateEntry.address}
                            onChange={(e)=> setUpdateEntry({
                                ...updateEntry,
                                [e.target.name]: e.target.value
                            })}
                         /> 
                    </div>
                    <button type="submit">Update</button>                               
                </form>
                
            </div>
            <div className="results">
                <ul onClick={handleClick}>                     
                    {receivedData.map((item, index) => (
                        <li key={index}                            >
                            <p>{item.id}</p>
                            <p>Name: {item.data.name}</p>
                            <p>Type: {item.data.type}</p>
                            <p>Address: {item.data.address}</p>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}



export default Update;