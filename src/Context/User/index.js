import React, {createContext,useContext, useEffect, useState}from "react";
import { getUsers } from "../../Services/Users";
export const UserContext = createContext();


export const UserProvider = ({children}) =>{

    useEffect(()=>{
        getAllUsers();
    },[])
    const getAllUsers = async () =>{
        setIsloading(true);
        const allUsers = await getUsers();
        console.log("users", allUsers);
        setUsers(allUsers);
        setIsloading(false);
       
    }

    const [lastUser,setLastUser] = useState(null)
    const [users, setUsers] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const value = {
        lastUser,
        setLastUser,
        users,
        setUsers,
        getAllUsers,
        isLoading,
        setIsloading
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}