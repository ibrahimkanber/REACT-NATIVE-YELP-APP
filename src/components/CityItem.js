/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";


const CityItem = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>props.onSelect()} style={styles.container}>
                <Text style={styles.text}>{props.cityName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CityItem;
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '300'
    }
})