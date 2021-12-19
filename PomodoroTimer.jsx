import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import {Timer} from './Timer';
import {Input, InputLeftAddon} from 'native-base';

export default class PomodoroTimer extends React.Component{
    
    constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType: "Working",
		}
	}

	render() {
		let time= this.setTime()
		return (
			<View>
      			<Button
				  title="Pomodoro"
				  onPress={this.setWorkTime}
				  />
      			<Button
				  title="Break Time"
				  onPress={this.setBreakTime}/>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.timerCompleted}
					period={time}
				/>
			</View>
			);
	}

	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.Play()
		}
	  }
    timeComplete = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

    setTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

    
	setWorkTime = () =>{
	/*
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
			
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}*/

		this.setState({intervalType: "Working"})
	}
	
	setBreakTime = () =>{
		/*
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
			
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				breakTime: 5
			})
		}
		*/
		this.setState({intervalType: "On Break"})
	}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
  