// Import Libs we need to create a component
import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Create a component - a function that return some 'JSX'
// const ComponentsScreen = function(){}
const ComponentsScreen = () =>{
  return <Text style={styles.textStyle}>This is the text</Text>;
};

// Create a stylesheet to style our component
const styles = StyleSheet.create({
  textStyle : {
    fontSize: 40
  }
});

// Export the component so we can use it elsewhere in our project
export default ComponentsScreen;

/*
App.js{
    1- import ComponentsScreen;
      import ComponentsScreen from './src/screens/ComponentsScreen'
    2- add Components: ComponentsScreen in the navigator
    3- Change initialRouteName to Components

  }
*/
