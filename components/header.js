import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, Dimensions, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
//import Home from './Home';
// import Notes from './components/Notes';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Notive</Text>
      {/* Home Page/Pomodoro Timer + Tasks */}
      <Ionicons.Button 
            name="checkbox-outline" 
            size={30} 
            color="red" 
            backgroundColor='none' 
            marginTop={55}>
       </Ionicons.Button>

       {/* Notes Page */}
      <FontAwesome.Button 
            name="pencil-square-o" 
            size={30} color="red" 
            backgroundColor='none' 
            marginTop={55} >
      </FontAwesome.Button>
      
      {/* Music Page */}
      <MaterialCommunityIcons.Button 
            name="music-box-outline" 
            size={30} 
            color="white" 
            backgroundColor='none' 
            marginTop={55}> 
      </MaterialCommunityIcons.Button>
      
      {/* Music Page */}
      <Ionicons.Button 
            name="person-circle-outline" 
            size={30} 
            color="white" 
            backgroundColor='none' 
            marginTop={55}>
      </Ionicons.Button>
    </View>
    
  );
}

// const AppNavigator = createStackNavigator({
//     // Home: {
//     //   screen: HomeScreen
//     // },
//     Notes: {
//       screen: Notes
//     }
//   },
//   {
//           initialRouteName: "Home"
//   });
  
// const AppContainer = createAppContainer(AppNavigator);



const styles = StyleSheet.create({
    header:{
        height: .8*(deviceHeight/6),
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      },
    title:{
        width: 2*(deviceWidth/5),
        fontFamily: 'GillSans',
        fontSize: 50,
        lineHeight: .8*(deviceHeight/6),
        color: 'white',
        textAlign:'left',
        margin: 10,
      },
    navBarIcon:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,

    }
});
