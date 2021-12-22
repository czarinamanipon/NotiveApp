import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'


import Setting1 from './Setting1'
import SettingOption1 from './Setting1/Options'

const Setting1Stack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <Setting1Stack.Navigator>
      <Setting1Stack.Screen name="Settings" component={Setting1} />
      <Setting1Stack.Screen name="Options" component={SettingOption1} />
    </Setting1Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="lens"
    type="material"
    size={26}
    color={focused ? '#adacac' : '#ededed'}
  />
)

export default function Profile() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: props => <HomeIcon {...props}/>
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
          showIcon: true,
          indicatorStyle: {
            backgroundColor: 'transparent',
          },
          labelStyle: {
            fontSize: 12,
          },
          iconStyle: {
            width: 30,
            height: 30,
          },
          style: {
            // backgroundColor: 'transparent',
            justifyContent: 'center',
          },
        }}
      >
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
