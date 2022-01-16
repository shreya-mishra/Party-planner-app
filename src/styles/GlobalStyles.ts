import {StyleSheet} from 'react-native';

export const DrawerViewStyles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  drawerHeaderContainer: {
    flexDirection: 'row',
    //   justifyContent: 'center',
    marginTop: 30,
  },
  drawerHeaderAvatarWithText: {
    // height: 100,
    // width: 100,
    // borderRadius: 100,
    // backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 20,
    marginTop: 30,
    paddingLeft: 10,
  },
  drawerAvatarIcons: {
    height: 90,
    width: 90,
  },
  drawerAvatarText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  drawerIconsWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  drawerIcons: {
    height: 30,
    width: 30,
  },
  drawerText: {
    marginLeft: 20,
    fontSize: 20,
  },
  profileDrawerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  drawerFooter: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginBottom: 50,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#efefef',
  },
  drawerFooterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const SearchBoxStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    height: 38,
    width: 300,
    borderWidth: 1,
    marginTop: 10,
    marginRight: 100,
    borderRadius: 15,
  },
  searchIcon: {
    // color: '#0',
    // padding: 10,
    marginLeft: 270,
    // marginTop: 20,
  },
});
