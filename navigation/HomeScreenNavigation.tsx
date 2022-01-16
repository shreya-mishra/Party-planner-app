import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenView from '../src/screens/HomeScreen';
import EventScreenView from '../src/screens/EventScreen';

const HomeScreenNavigation = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer independent>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <stack.Screen name={'Home'} component={HomeScreenView} />
        <stack.Screen name={'Events'} component={EventScreenView} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenNavigation;
