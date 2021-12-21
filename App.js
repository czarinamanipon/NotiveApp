/* Notive Productivity App */
/* HOMEPAGE */

import * as React from 'react';
import { StyleSheet , useState, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Header from './components/header';
import PomodoroTimer from "./components/PomodoroTimer";

/* Native Base Components*/
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

 /*
 REFERENCES:
 Weekday Dependency: https://www.npmjs.com/package/weekday
 Pomodoro Timer (PomodoroTimer/Timer/TimerDisplay/TimerButtons): https://github.com/apoorva-dave/Pomodoro-Timer
 Native Base Checklist: https://docs.nativebase.io/todo-example
 */

export default function App() {
  const homebg = { uri: "../assets/homescreenbg" };
  const weekday = require('weekday');
  
  return (
    
    <ImageBackground  style= { styles.backgroundImage } source={require('../assets/homescreenbg.png')}>
      <Header />
      <NativeBaseProvider>
        <Box style={styles.container} bg={{
            linearGradient: {
              colors: ['lightBlue.300', 'violet.800'],
              start: [0, 0],
              end: [1, 0],
            },
          }}>
              <Center flex={1} px="3">
                <Text style={styles.pageTitle}>Happy {weekday()}!</Text>
                <PomodoroTimer />
                <ScrollView _contentContainerStyle={{
                  px: "20px",
                  mb: "4",
                  minW: "72",
                }}
                >
                  <TaskList />
                </ScrollView>
                <ScrollView _contentContainerStyle={{
                  px: "20px",
                  mb: "4",
                  minW: "72",
                }}
                >
                  <Reminders />
                </ScrollView>
              </Center>
            
          </Box>
        </NativeBaseProvider>
    </ImageBackground>
  );
}

export const TaskList = () => { 
  const instState = [
    {
      title: "Begin to add tasks!",
      isCompleted: false,
    },
  ]
  const [list, setList] = React.useState(instState)
  const [inputValue, setInputValue] = React.useState("")

  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ])
  }

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index)
    setList(temp)
  }

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
    )
    setList(temp)
  }


  return (
    <Box>
      <Text style={styles.subTitle}>Tasks</Text>
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
            background={'white'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addItem(inputValue)
              setInputValue("")
            }}
          >
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack space={2}>
          {list.map((item, itemI) => (
            <HStack
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              key={item.title + itemI.toString()}
            >
              <Checkbox
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.title}
              >
                <Text
                  mx="2"
                  strikeThrough={item.isCompleted}
                  style={{color:'white'}}
                  _light={{
                    color: item.isCompleted ? "gray.400" : "coolGray.800",
                  }}
                  _dark={{
                    color: item.isCompleted ? "gray.400" : "coolGray.50",
                  }}
                >
                  {item.title}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                colorScheme="trueGray"
                icon={
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                    color="trueGray.400"
                  />
                }
                onPress={() => handleDelete(itemI)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}

export const Reminders = () => {  const instState = [
    {
      title: "Did you remember?",
      isCompleted: false,
    },
  ]
  const [list, setList] = React.useState(instState)
  const [inputValue, setInputValue] = React.useState("")

  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ])
  }

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index)
    setList(temp)
  }

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
    )
    setList(temp)
  }

  return (
    <Box>
      <Text style={styles.subTitle}>Reminders</Text>
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
            background={'white'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addItem(inputValue)
              setInputValue("")
            }}
          >
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack space={2}>
          {list.map((item, itemI) => (
            <HStack
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              key={item.title + itemI.toString()}
            >
              <Checkbox
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.title}
              >
                <Text
                  mx="2"
                  strikeThrough={item.isCompleted}
                  style={{color:'white'}}
                  _light={{
                    color: item.isCompleted ? "gray.400" : "coolGray.800",
                  }}
                  _dark={{
                    color: item.isCompleted ? "gray.400" : "coolGray.50",
                  }}
                >
                  {item.title}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                colorScheme="trueGray"
                icon={
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                    color="trueGray.400"
                  />
                }
                onPress={() => handleDelete(itemI)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}

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
    shadowColor: '#171717',
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