import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './app/screens/home';
import Menu from './app/screens/menu';
import Deals from './app/screens/deals';
import Contact from "./app/screens/contact";
// import Soups from "./app/screens/soups";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" mode="modal">
          <Stack.Screen name="Main" component={TabScreen} />
          {/* <Stack.Screen name="Soups" component={Soups} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class TabScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          tabStyle: {
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Deals" component={Deals} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
