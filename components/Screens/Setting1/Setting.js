import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons';


import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  text:{
    fontSize:30,
    fontFamily: 'Avenir',
    fontColor: 'blue',
  }
})

class SettingsScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    pushNotifications: true,
  }

  onPressSetting = () => {
    this.props.navigation.navigate('Options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  render() {
    const { avatar, name, emails: [firstEmail] } = this.props
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{uri: avatar}}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 12,
              }}
            >
              {firstEmail.email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        
        <View>
          <Ionicons.Button name="notifications-outline" size={30} color="red" backgroundColor='none' marginTop={55}>
            <Text style = {styles.text}> Notifications</Text>
          </Ionicons.Button>
        </View>

        <View>
          <Ionicons.Button name="share" size={30} color="red" backgroundColor='none' marginTop={55}>
            <Text style = {styles.text}> Share with Me</Text>
          </Ionicons.Button>
        </View>

        <View>
          <Ionicons.Button name="hammer" size={30} color="red" backgroundColor='none' marginTop={55}>
            <Text style = {styles.text}> Customize Theme</Text>
          </Ionicons.Button>
        </View>

        <View>
          <Ionicons.Button name="link" size={30} color="red" backgroundColor='none' marginTop={55}>
            <Text style = {styles.text}> Link Accounts</Text>
          </Ionicons.Button>
        </View>

        <View>
          <Ionicons.Button name="help-outline" size={30} color="red" backgroundColor='none' marginTop={55}>
            <Text style = {styles.text}> Help Center</Text>
          </Ionicons.Button>
        </View>

      </ScrollView>
    )
  }
}

export default SettingsScreen
