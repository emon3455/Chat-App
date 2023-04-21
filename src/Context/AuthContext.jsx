import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) =>{
    
    const [ currentUser , setCurrentUser] = useState(null);

    const loginWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider);
    }

    const logOut = () => signOut(auth);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })

        return unsubscribe;

    },[])

    const authInfo ={
        currentUser,
        setCurrentUser,
        loginWithGoogle,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}