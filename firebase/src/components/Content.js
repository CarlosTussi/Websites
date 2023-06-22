import { useEffect, useState } from 'react';
import  {db, collection_name}  from '../services/firebase.config'
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "@firebase/firestore"


function Content()
{
    const [dbData, setDbData] = useState([]);
    const [showData, setShowData] = useState(false);

    const toggleShowData = () => {
        setShowData(!showData);
    }

    useEffect(() => {

        if(showData === true)
        {
            console.log("entered here");
            getDocs(collection(db, collection_name))
            .then( customers => {
                customers.forEach(person => {
                    console.log(person.data())
                })
            });                        

            toggleShowData();
        }
        
    },[showData, toggleShowData])

    const handleSubmit = () =>{
        toggleShowData();
    }

    return(
        <>
            <button onClick={handleSubmit}>Show All</button>            
        </>
    )
}

export default Content;