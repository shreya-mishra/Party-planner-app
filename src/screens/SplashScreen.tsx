import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';

type SplashScreenViewProps = {
    navigation: StackNavigationProp<any, any>;
};
const SplashScreenView: FC<SplashScreenViewProps> = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }, 1000);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>SplashScreenView</Text>
        </View>
    );
};

export default SplashScreenView;