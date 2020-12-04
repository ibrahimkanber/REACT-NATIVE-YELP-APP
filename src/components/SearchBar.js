/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,TextInput,StyleSheet} from "react-native";

const Searchbar=(props)=>{
    return(
        <View style={styles.container} >
            <TextInput onChangeText={(val)=>props.onSearch(val)} placeholder={props.placeholder} style={{fontSize:18}}/>
        </View>
    )
}

export default Searchbar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        margin: 5,
        padding: 5,
        borderRadius: 5,
      
    }
})