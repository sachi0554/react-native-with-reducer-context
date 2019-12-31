import React, {useState} from 'react';
import {View , Text ,StyleSheet , TextInput, Button} from 'react-native';


const BlogPostForm =({onSubmit,initialValue})=>{
    const [title, setTitle]= useState(initialValue.title);
    const [content, setContent]= useState(initialValue.content);
    return <View>
                <Text style={styles.lable}>Enter Title </Text>
                <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
                <Text style={styles.lable}>Enter Content </Text>
                <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
                <Button
                  onPress={()=>onSubmit(title, content)}
                  title="Save Blog"/>
             </View>
}

BlogPostForm.defaultProps={
  initialValue:{
      title:'',
      content:''
  }   
};

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
      },
      lable:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
     
      }
});

export default BlogPostForm;