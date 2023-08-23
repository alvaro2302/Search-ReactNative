import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
const User = ({user}) =>{
    const {name,email} = user.item;
    return(
        <View style={{flex:1}}>
        <Card style={styles.card}>
            <Card.Title 
                title={name}
                style={styles.item}
                subtitle={email}
                left={(props) => <Avatar.Icon {...props} icon={"account"} />}
                right={(props) => <IconButton {...props} icon={"dots-vertical"}/>}
            />        
        </Card>
        </View>
    )
   
}
const styles = StyleSheet.create({
    item: {
      
        //backgroundColor:"blue",
        flex: 1,
        padding: 5,
   
    },
    card: {
        flex: 1,
        height:100,
        marginTop:20
        //backgroundColor:"red"
    },
})
export default User;