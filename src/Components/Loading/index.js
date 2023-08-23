import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

const Loading = ({isLoading}) =>{

    return(
        <ActivityIndicator animating={isLoading} color= {"#3390FF"} style={{height:"50%",alignSelf:"center"}}/>
    )
}
export default Loading;