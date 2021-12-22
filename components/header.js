import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import Home from './Screens/Home';
import Notes from './Screens/Notes';
import Profile from './Screens/Profile';

import { not } from 'react-native-reanimated';


//Screen names
// const homeName = "Home";
const homeName = "Home";
const notesName = "Notes";
const profileName = "Profile";
// const detailsName = "Details";
// const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function Header() {
  return (
    <NavigationContainer independent ={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'checkbox' : 'checkbox-outline';
            } else if (rn === notesName) {
              iconName = focused ? 'pencil' : 'pencil-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }
            
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'grey',
          labelStyle: { paddingTop: 5, fontSize: 15,top: 100 },
          style: { padding: 10, height: 30, position: 'absolute',  }
        }}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={notesName} component={Notes} />
        <Tab.Screen name={profileName} component={Profile} />

        {/* <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Header;