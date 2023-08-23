import React,{useContext, useEffect} from "react";
import { View, } from "react-native";
import SearchBarUser from "../../Components/Search";
import { UserContext } from "../../Context/User";
const SearchHome = () => {
    const context = useContext(UserContext);
    const {lastUser} = context;
    useEffect(()=>{
        console.log("userInitial",lastUser);

    },[])

    useEffect(()=>{
        console.log("userChange", lastUser)
    },[lastUser])
    return (
        <View style={{width:"100%",height:"100%"}}>
            <SearchBarUser/>
        </View>
    )
}

export default SearchHome;