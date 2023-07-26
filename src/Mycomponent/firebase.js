// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import {getAuth,GoogleAuthProvider, signInWithPopup,signInWithRedirect} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDYK5guizsAMgxVKmVOZKXBRxI_jJvHN8",
    authDomain: "keepithere-f4610.firebaseapp.com",
    databaseURL: "https://keepithere-f4610-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "keepithere-f4610",
    storageBucket: "keepithere-f4610.appspot.com",
    messagingSenderId: "662426896211",
    appId: "1:662426896211:web:ed6530070c218648ee03a6",
    measurementId: "G-09N6987TBB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// const provider= new GoogleAuthProvider();


// export const SignIngoogle=()=>{
//     signInWithRedirect(auth,provider)
//     .then((result)=>{
//         const name= result.user.displayName;
//         const email=result.user.email;
//         const profile= result.user.photoUrl;
//         localStorage.setItem("name",name);
//         localStorage.setItem("email",email);
//         localStorage.setItem("photo",profile);
//     })
//     .catch((error)=>{
//         alert("error");
//     });
    
// };

// export const signout=()=>{
//     localStorage.clear();
//     window.location.reload(false);
// }