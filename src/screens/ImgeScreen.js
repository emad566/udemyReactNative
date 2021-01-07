import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import ImageDetails from '../components/ImageDetails.js';

const ImgeScreen= ()=>{
     
    return(
        <View>
            <ImageDetails title="beach" src={require('../../assets/images/beach.jpg')}/>
            <ImageDetails title="forest" src={require('../../assets/images/forest.jpg')}/>
            <ImageDetails title="mountain" src={require('../../assets/images/mountain.jpg')}/>
        </View>
    );
};

const Styles= StyleSheet.create({
    
});

export default ImgeScreen;