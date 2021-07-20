import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigators/DrawerNavigator';
import { Provider } from 'react-redux';
import {store} from './src/store/index';
import Toast from 'react-native-toast-message';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>       

   <Provider store={store}>
   <AppNavigator />    
   <Toast ref={(ref) => Toast.setRef(ref)} />
   </Provider>
    
  
    </ApplicationProvider>
  </>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
