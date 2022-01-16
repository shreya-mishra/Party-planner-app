import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchBox from '../component/SearchBox/SearchBox';
import Images from '../constant/Images/Images';

type HomeScreenViewProps = {
  props: DrawerContentComponentProps;
};
const HomeScreenView: FC<HomeScreenViewProps> = ({props}) => {
  return (
    <View>
      {/* Home Header */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image
            source={Images.hamBurgerIcon}
            style={{height: 40, width: 40, margin: 10}}
          />
        </TouchableOpacity>
        <SearchBox />
      </View>
      <View
        style={{
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: 'black',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          HomeScreenView
        </Text>
      </View>
    </View>
  );
};

export default HomeScreenView;
