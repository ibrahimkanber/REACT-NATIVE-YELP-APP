/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {useEffect} from "react";
import { View, Text,FlatList } from "react-native";
import axios from 'axios';
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from "../components/SearchBar"

let originalList=[];

const RestaurantList = (props) => {
    const [restaurantList, setRestaurantList] = useState([])
    const { selectedCity } = props.route.params;
console.log(selectedCity)
    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    city: selectedCity
                }
            })
            .then(response => {
                setRestaurantList(response.data.restaurants);
                originalList=[...response.data.restaurants]
            })
    }
   
   
    useEffect(() => {
        fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function onSelect(item){
        props.navigation.navigate("Details",{selectedRestaurant:item})
    }
   
    const renderRestaurants=({item})=>{
        return(
            <RestaurantItem
            restaurant={item}
            onSelect={()=>onSelect(item)}
            />
        )
    };
    function searchRestaurants(val){
        // console.log(restaurantList[0].name)
        const filteredRestaurants=originalList.filter(restaurant=>{
            const searchedValue=val.toUpperCase();
            const restaurantName= (restaurant.name).toUpperCase() 
            return restaurantName.indexOf(searchedValue)>-1
        })

        setRestaurantList(filteredRestaurants)
    }


    return (
        <View>
           
            <SearchBar
            onSearch={val=>searchRestaurants(val)}
            placeholder="Search a restaurant..."
            />
            <FlatList
            data={restaurantList}
            renderItem={renderRestaurants}
            keyExtractor={(_,index)=>index.toString()}/>
        </View>
    )
}

export { RestaurantList }