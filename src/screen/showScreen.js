import React, {useContext} from 'react';
import {Text, View, StyleSheet,} from 'react-native';
import {Context} from '../context/blogContext';


const ShowScreen=({navigation})=>{
  const {state} = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost =state.find((blogpost)=>blogpost.id === id);
   
   return <View>
             <Text>{blogPost.title}</Text>
         </View>
}

const styles = StyleSheet.create({
 
});

export default ShowScreen;