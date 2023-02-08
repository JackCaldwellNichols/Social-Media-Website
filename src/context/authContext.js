import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState
        (JSON.parse(localStorage.getItem('user')) || null)

    useEffect (()=> {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])
    
    const login = () => {
        setCurrentUser
        ({
            id:1, 
            name: "James Doe", 
            profilePic: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg"
        })
    }

    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
}
