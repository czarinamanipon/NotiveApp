/* Notive Productivity App */
/* HOMEPAGE */

import * as React from 'react';
import { StyleSheet , useState, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Header from './components/header';
import PomodoroTimer from "./components/PomodoroTimer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

import {
  ScrollView,
  Input,
  IconButton,
  Checkbox,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";

import MainContainer from './MainContainer';

 /*
 REFERENCES:
 React Navigation: https://reactnavigation.org/docs/getting-started
 */


export default function App(){
  <MainContainer />
}


// export function HomeScreen() {
//   return (
//   );
// }

// export function Notes(){
//   return (

//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  subTitle:{
    color: 'white',
    fontSize: 25,
    },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 81,
    shadowColor: '#d93838',
    alignSelf:'center',
    shadowColor: '#b193a0',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1.0,
    shadowRadius: 3,
    width: 100,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: 'white',
    },
});