/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,TouchableOpacity} from "react-native";
import axios from 'axios';

import SearchBar from "../components/SearchBar"
import CityItem from '../components/CityItem';

let originalList=[]

// eslint-disable-next-line prettier/prettier
const CityList = (props) => {
    const [cityList, setCityList] = useState([]);
    

    const fetchCityData = async () => {
        const { data } = await axios.get("http://opentable.herokuapp.com/api/cities");

        // console.log(data.cities)
        setCityList(data.cities);
        originalList=[...data.cities]

    }

    useEffect(() => {
        fetchCityData()
    }, [])

    const renderCities = ({ item }) => {
        // return <Text>{item}</Text>
        return(
            <CityItem
            cityName={item}
            onSelect={()=>props.navigation.navigate("Restaurants",{selectedCity:item})}
            />

        )
    }

    const renderSeperator=()=><View style={{borderWidth:2,borderColor:"rgb(36, 105, 145)"}}></View>

    function searchCity(search){
        const filteredCity=originalList.filter(city=>{
            const text=search.toUpperCase();
            const cityName=city.toUpperCase();
            return cityName.indexOf(text)>-1
        })
        setCityList(filteredCity)
    }

    return (
        <View>
        
            <SearchBar 
            placeholder="Search a city..."
            onSearch={(value)=>searchCity(value)}

            />
            <FlatList
                data={cityList}
                renderItem={renderCities}
                keyExtractor={(_, index) => index.toString()}
                ItemSeparatorComponent={renderSeperator} />
        </View>
    )
}

export { CityList }