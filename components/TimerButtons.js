import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TimerButtons extends React.Component {
	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					<TouchableOpacity style={styles.button} onPress={this.props.pause}>
						<Text style={styles.buttonText}>Pause</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reset</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
					<TouchableOpacity style={styles.button} onPress={this.props.play}>
						<Text style={styles.buttonText}>Play</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: "row" ,
		marginLeft: 20, 
		justifyContent: 'space-evenly',
		marginBottom: 20,
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
})