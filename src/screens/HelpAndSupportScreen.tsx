import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

const HelpAndSupport = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        Help And Support
      </Text>
    </View>
  );
};

export default HelpAndSupport;
