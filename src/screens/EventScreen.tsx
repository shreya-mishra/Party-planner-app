import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

type EventScreenViewProps = {
  navigation: StackNavigationProp<any, any>;
};
const EventScreenView: FC<EventScreenViewProps> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        EventScreenView
      </Text>
    </View>
  );
};

export default EventScreenView;
