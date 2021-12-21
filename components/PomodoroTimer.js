import {NativeBaseProvider, HStack} from 'native-base';
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Timer from './Timer';


class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	// handles completion of timer
	handleTimerCompleted = () => {
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

	// gets triggered on change of worktimer text
	handleWorkTime = () => {
		this.setState({
			intervalType: "Working"
		})
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		this.setState({
			intervalType: "Break"
		})
	}

	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
						<NativeBaseProvider>
							<HStack space={10} alignItems='center'>
								
							<TouchableOpacity
								style={styles.button}
								title="Pomodoro"
								onPress={this.handleWorkTime}
							>
								<Text style={styles.buttonText}>Pomodoro</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								title="Break"
								onPress={this.handleBreakTime}
							>
								<Text style={styles.buttonText}>Break</Text>
							</TouchableOpacity>
							</HStack>
						</NativeBaseProvider>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
			)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
	
   row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20
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