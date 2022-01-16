import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

const SettingScreenView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        SettingScreenView
      </Text>
    </View>
  );
};

export default SettingScreenView;
