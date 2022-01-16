import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../src/screens/ProfileScreen';
import DrawerViewContent from '../src/component/DrawerView/DrawerView';
import HelpAndSupport from '../src/screens/HelpAndSupportScreen';
import SettingScreenView from '../src/screens/SettingsScreen';
import HomeScreenNavigation from './HomeScreenNavigation';

const DrawerNavigation = () => {
  const drawer = createDrawerNavigator();

  return (
    <NavigationContainer independent>
      <drawer.Navigator
        initialRouteName="HomeNavigation"
        drawerContent={props => <DrawerViewContent props={props} />}>
        <drawer.Screen
          name="HomeNavigation"
          component={HomeScreenNavigation}
          options={{title: 'Home', headerShown: false}}
        />
        <drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
        <drawer.Screen
          name="HelpAndSupportScreen"
          component={HelpAndSupport}
          options={{title: 'Help & Support'}}
        />
        <drawer.Screen
          name="Settings"
          component={SettingScreenView}
          options={{title: 'Setting'}}
        />
      </drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
