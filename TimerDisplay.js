import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	// display currently running timer
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		height: 150,
		width: 200,
		marginTop: "7%",
	    marginBottom: "10%",
	    marginLeft: "7%",
	    marginRight: "7%",
	    padding: "20%",
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 5,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#171717',
		shadowOffset: {width: -4, height: 4},
		shadowOpacity: 1.0,
		shadowRadius: 3,
	},
	textStyle: {
		color: "white",
	    fontSize: 50,
	    fontWeight: "400",
	}
})