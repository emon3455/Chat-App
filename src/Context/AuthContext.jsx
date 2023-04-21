import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) =>{
    
    const [ currentUser , setCurrentUser] = useState(null);
    const [laoding , setLoading] = useState(true);

    const loginWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider);
    }

    const logOut = () => signOut(auth);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;

    },[])

    const authInfo ={
        currentUser,
        setCurrentUser,
        loginWithGoogle,
        logOut,
        laoding
    }
    
    return (
        <AuthContext.Provider value={authInfo}>

            {!laoding && children}
        
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}