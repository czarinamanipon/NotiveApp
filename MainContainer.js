import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// Screens
import Home from './components/Home';
import Notes from './components/Notes';

//Screen names
const homeName = "Home";
const notesName = "Notes";

const Tab = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'notes' : 'list-outline';

            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={notesName} component={Notes} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;