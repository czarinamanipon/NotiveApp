import { registerRootComponent } from 'expo';
import * as React from 'react';
import { StyleSheet , useState, View, Text} from 'react-native';
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


//import {PomodoroTimer} from "./components/PomodoroTimer";

export default function App() {
  //Homepage
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Text style={styles.title}>Notive Home</Text>
        <Box>Hello wwwwwwwwwworld</Box>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});