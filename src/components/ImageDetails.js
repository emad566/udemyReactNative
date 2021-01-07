import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const ImageDetails= (props)=>{
    return(
        <View>
            <Image source={props.src} />
            <Text>{props.title}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default ImageDetails;