import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
function HomeScreen() {

  
  const tickets = useSelector(state => state.ticket.tickets)
  const [state, setstate] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch({type: 'GET_TICKETS_REQUEST'})
  }, [state])
  const puchaseTicket = (itemId) => {      
    console.log(itemId);
      dispatch({type: 'SET_TICKETS_REQUEST', itemId});
  }
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const Item = ({ item, id, desc, price }) => { 
 
   return(
  <View style={styles.item}>
<Card>
   
    <Card.Content>
      <Title>{item}</Title>
      <Paragraph>{desc}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>      
      <Button  mode="contained"onPress={() => puchaseTicket(id)}>Purchase</Button>
      <Title style={{marginLeft:widthPercentageToDP('60'), color: "coral", fontWeight: 'bold'}}>{price} TL</Title>
    </Card.Actions>
  </Card>
  </View>
  );
};
  const renderItem = ({ item}) => (
      
    <Item item={item.name} id = {item.id} desc= {item.description} price ={item.price}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item:{
    borderWidth: 5,
    borderColor: "#f2d5ae"
  }
});
export default HomeScreen;
