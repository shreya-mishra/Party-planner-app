import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React, {FC, useState} from 'react';
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../constant/Images/Images';
import Strings from '../../constant/lang/en';
import {DrawerViewStyles} from '../../styles/GlobalStyles';

type DrawerViewProps = {
  props: DrawerContentComponentProps;
};

const DrawerViewContent: FC<DrawerViewProps> = ({props}) => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={DrawerViewStyles.drawerContainer}>
      <View>
        <View style={DrawerViewStyles.drawerHeaderContainer}>
          <View style={DrawerViewStyles.drawerHeaderAvatarWithText}>
            <Image
              style={DrawerViewStyles.drawerAvatarIcons}
              source={Images.testAccountIcon}
            />
            <Text style={DrawerViewStyles.drawerAvatarText}>Test User</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeNavigation')}>
            <View style={DrawerViewStyles.drawerIconsWithText}>
              <Image
                style={DrawerViewStyles.drawerIcons}
                source={Images.homeIcon}
              />
              <Text style={DrawerViewStyles.drawerText}>
                {Strings.Drawer_Nav_Home}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <View style={DrawerViewStyles.profileDrawerView}>
              <Image
                style={DrawerViewStyles.drawerIcons}
                source={Images.profileIcon}
              />
              <Text style={DrawerViewStyles.drawerText}>
                {Strings.Drawer_Nav_Profile}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpAndSupportScreen')}>
            <View style={DrawerViewStyles.profileDrawerView}>
              <Image
                style={DrawerViewStyles.drawerIcons}
                source={Images.supportIcon}
              />
              <Text style={DrawerViewStyles.drawerText}>
                {Strings.Drawer_Nav_Support}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={DrawerViewStyles.profileDrawerView}>
              <Image
                style={DrawerViewStyles.drawerIcons}
                source={Images.settingIcon}
              />
              <Text style={DrawerViewStyles.drawerText}>
                {Strings.Drawer_Nav_Setting}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={DrawerViewStyles.drawerFooter}>
          <Text style={DrawerViewStyles.drawerFooterText}>
            {Strings.Drawer_Nav_DarkMode}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default DrawerViewContent;
