import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Card,
  Icon,
  IndexPath,
  Divider,
  Text
} from '@ui-kitten/components';

import { StatusBar, StyleSheet } from 'react-native';

import mainStackNavigator from './MainStackNavigator';

const { Navigator, Screen } = createDrawerNavigator();

const HomeIcon = props => <Icon {...props} name="home" />;

const Header = props => (
  <React.Fragment>
    <Card style={styles.card}>
      <Icon style={styles.icon} fill="white" name="person" />
      
    </Card>
    <Divider />
  </React.Fragment>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    header={Header}
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem accessoryLeft={HomeIcon} title="Home" />

  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator
    drawerContent={props => (
      <DrawerContent {...props} style={{ paddingTop: StatusBar.currentHeight }} />
    )}>
    <Screen name="Home" component={mainStackNavigator} />
  
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer style={{ paddingTop: 100 }}>
    <DrawerNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  icon: {
    paddingLeft: '100%',
    width: 128,
    height: 64,
  },
  text: {
    margin: 4,
    paddingLeft: '30%',
    color: 'white',
  },
  card: {
    backgroundColor: '#3366ff',
    borderWidth: 0,
    borderColor: '#3366ff',
    borderRadius: 0,
  },
});
