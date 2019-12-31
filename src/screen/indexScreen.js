import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'; 
import {Context} from '../context/blogContext';


const IndexScreen=({navigation})=>{

    const {state ,deleteBlogPost} = useContext(Context);
   return <View>
              <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return <TouchableOpacity onPress={()=>navigation.navigate('Display',{id:item.id})}><View style={styles.row}>
                            <Text>{item.title}-{item.id}</Text >
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon} size={22}/>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                }}
               />
         </View>
}
IndexScreen.navigationOptions=({navigation})=>{
    return{
       headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Create')}><Feather style={styles.icon} name="plus" size={30}/></TouchableOpacity>
    };
};
const styles = StyleSheet.create({
  row:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:20,
      borderTopWidth:1,
      borderBottomColor:'gray'
  },
  icon:{
      marginRight:20
  }
});

export default IndexScreen;