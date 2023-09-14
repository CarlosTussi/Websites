// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS_3XTEq6FstdR7wS316fyl3pspbkFXjs",
  authDomain: "cocktailguide-c9736.firebaseapp.com",
  projectId: "cocktailguide-c9736",
  storageBucket: "cocktailguide-c9736.appspot.com",
  messagingSenderId: "89279667763",
  appId: "1:89279667763:web:da933a7efed5f6f7344d46"
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