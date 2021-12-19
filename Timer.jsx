import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Heading } from 'native-base';

import TimerButtons from "TimerButtons";

export class Timer extends React.Component{

    constructor(props) {
		super(props)
		this.state = {
			running: false,
			time: this.props.period * 60
		}
	}


    render(){
		return (
			<View>
				
				<Text>
                    {this.state.running}
                </Text>
				
				<Text>
                    {this.state.time}
                </Text>
				
				
			</View>
		)
    }
	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.handlePlay()
		}
	  }

	render() {
		return (
			<View>
				<TimerButtons
					play={this.play}
					pause={this.pause}
					reset={this.reset}
					running={this.state.running}
				/>
			</View>
		)
	}


	componentDidUpdate() {
		if(this.state.running === true && this.state.time == 0)
		{
			clearInterval(this.timerId)
			Vibration.vibrate([500, 500, 500])
			this.props.Oncomplete()

		}
		else if(this.state.running === false)
		{
			clearInterval(this.timerId)
		}
	}

	/*
	startButton = () => {
		console.log("Running=" + running)
		if(this.state.running === true){
			this.pause
			this.reset
			this.state.startButtonText = "Start"
		} else {
			this.play
			this.state.startButtonText = "Pause"
		}
	}
	*/

    play = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}

	pause = () => {
		clearInterval(this.timerId)
		this.setState({
			running: false
		})
	}
    
	reset = () => {	
		clearInterval(this.timerId)
		this.setState({
			running: false,
			time: this.props.period * 60
		})
	}
}

const styles = StyleSheet.create({
	textStyle: {
	  color: "#C2362B",
	  fontSize: 25,
	  fontWeight: "500",
	  letterSpacing: 1.5,
	  fontFamily: Platform.OS == "android" ? "notoserif" : "system",
	  marginTop: 40,
	  padding: 20
	}
  });