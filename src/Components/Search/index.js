import React,{ useContext, useEffect, useState,}from "react";
import { View,Text,StyleSheet} from "react-native";
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { UserContext } from "../../Context/User";
import Loading from "../Loading";
import ResultsSearch from "../ResultsSearch";
const myIcon = <Icon name="rocket" size={30} color="black" />;

const SearchBarUser = () => {
    const context = useContext(UserContext);
    const {setLastUser,users,isLoading} = context;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    console.log("isLoading",isLoading)
    useEffect(() =>{
        if(search !== ""){
            console.log("searchss",search)
            searchUser();
        }
        else
        {
            setSearchResults([])
        }
     
    },[search])
    

    const searchUser = () =>{
        if(search){
        
        //console.log("searchedUser",searchedUser.length);
        const searchUser = users.filter((user) =>{
            const emailLoweCase = user.email.toLowerCase();
            const searchLowerCase = search.toLowerCase();
            if(emailLoweCase.includes(searchLowerCase)) {
                return user
            }
        })
        console.log("results",searchUser)
        setSearchResults(searchUser);
        }
    }
    return(
        <View>
    
        {
            
            isLoading ?(
                <View style={{width:"100%",height:"100%", display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <Loading isLoading={isLoading}/>
                </View>
            ):(
            <>
                <Searchbar
                    icon={() =>  <Icon name='search' size={20} style={{alignSelf:'center',marginTop:'25%'}} />}
                    placeholder="search"
                    onChangeText={(value) => setSearch(value)}
                    value={search}
                    style={{marginTop:"20%"}}
                    onSubmitEditing={searchUser}
                />
                <ResultsSearch searchResults={searchResults}/>
            </>
            )
            
        }
       
       </View>
    )
}
export default SearchBarUser;