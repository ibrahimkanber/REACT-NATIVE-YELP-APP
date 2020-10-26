/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TouchableOpacity,Image,Dimensions,StyleSheet } from "react-native";


const RestaurantItem = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>props.onSelect()} style={styles.container}>
                <Image style={styles.image} source={{uri:props.restaurant.image_url}}/>
            </TouchableOpacity>
            <Text style={styles.name}>{props.restaurant.name}</Text>
        </View>
    )
}

export default RestaurantItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})