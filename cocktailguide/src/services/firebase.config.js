// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  //CONFIDENTIAL (NOT FOR GITHUB)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collection_name = "cocktails";

export {db, collection_name};

/*
****IMPORTANT****
Click Build → Firestore database and navigate to the Rules tab. 
During development, we need to disable authentication to avoid 
running into permission issues.

match /todo/{docId} {
    allow read, write: if true;
}

change it to true



1) Create a collection:
  const usersCollectionRef = collection(db, "backenddata")

2) Add input to the database (collection)*Needs to be inside useEffect():
   addDoc(UsersCollectionRef, { Name: "heyhtere", age: "54 " })



*/