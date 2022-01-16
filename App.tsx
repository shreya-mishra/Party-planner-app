import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigation from './navigation/DrawerNavigation';

const App = () => {
  // const Stack = createStackNavigator();
  const drawer = createDrawerNavigator();

  return <DrawerNavigation />;
};

export default App;
