import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    
    const [ currentUser , setCurrentUser] = useState(null);

    const authInfo ={
        currentUser,
        setCurrentUser
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