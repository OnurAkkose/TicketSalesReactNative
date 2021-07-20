import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {startMq} from '../screens/mq';
import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator();
export default function mainStackNavigator() {
  const [data, setdata] = useState();
  const [ticket, setTicket] = useState(null);
  //AsyncStorage.clear();
  useEffect(async () => {
    //const {connection} =  await startMq(ticket, setTicket);
    // connection.connect();
  }, []);

  useEffect(() => {
    if (ticket) {
      setdata([...data, ticket]);
    }
  }, [ticket]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  /* useEffect(() => {
    if(notify){
      if(notify === "400") {
        Toast.show({
          type: 'error',
          text1: 'Hello',
          text2: 'Lokasyon seçiniz! 👋'
        });
      }  
      else if(notify === "500") {
        Toast.show({
          type: 'error',
          text1: 'Hello',
          text2: 'Eksik bilgi girdiniz! 👋'
        });
      }        

    }
  }, [notify])
  */

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}        
      />
      
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: 100,
  },
});
