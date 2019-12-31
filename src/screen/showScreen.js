import React, {useContext} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'; 
import {Context} from '../context/blogContext';


const ShowScreen=({navigation})=>{
  const {state} = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost =state.find((blogpost)=>blogpost.id === id);
   
   return <View>
             <Text>{blogPost.title}</Text>
             <Text>{blogPost.content}</Text>
         </View>
}
ShowScreen.navigationOptions=({navigation})=>{
  return{
     headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}><Feather style={styles.icon} name="edit" size={30}/></TouchableOpacity>
  };
};
const styles = StyleSheet.create({
  icon:{
    marginRight:20
}
});

export default ShowScreen;