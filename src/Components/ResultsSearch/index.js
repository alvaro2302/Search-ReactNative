import React from "react";
import { FlatList,SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,View } from "react-native";
import User from "../User";

const ResultsSearch = ({searchResults}) =>{
    console.log("search resultsss",searchResults.length)
    return(
        <>
        {

            searchResults.length > 0 ? (
        
            <FlatList
                data={searchResults}
               //contentContainerStyle={{ paddingBottom: 20}}
                renderItem={(user)=> <User user ={user}/>}
                keyExtractor={item => item.id}
                //contentContainerStyle={{paddingHorizontal:5}}
                ListFooterComponent={<View style={{height: 130}}/>}
            />
        
            )
            :
            (<Text> Not Search yet</Text>)
        }
        </>
    )
    
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})
export default ResultsSearch;