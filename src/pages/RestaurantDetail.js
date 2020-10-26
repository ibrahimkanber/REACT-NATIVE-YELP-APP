/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Linking } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{selectedRestaurant.name}</Text>
            <Image
                source={{ uri: selectedRestaurant.image_url }}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
            </View>
            <View style={styles.reserveContainer}>
                <TouchableOpacity>
                    <Text style={styles.reserveText} onPress={() => Linking.openURL(selectedRestaurant.reserve_url)}>Go TO RESERVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { RestaurantDetail }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { color: 'white', fontWeight: 'bold' },
    reserveContainer: {
        marginTop: 10,
        backgroundColor: "#c93724",
        padding: 10,
        width: 150, alignSelf: "center",
        borderRadius: 5,
        alignItems: "center"
    },
    reserveText: { color: 'white', fontWeight: 'bold' },

})