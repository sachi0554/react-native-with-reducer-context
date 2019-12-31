import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Context} from '../context/blogContext'; 
import BlogPostForm from '../components/blogPostForm';

const EditScreen=({navigation})=>{
   const {state,editBlogPost} = useContext(Context);
   const id = navigation.getParam('id');
   const blogPost =state.find((blogpost)=>blogpost.id === id);

   
   return  <BlogPostForm 
            initialValue = {{title: blogPost.title, content:blogPost.content}} 
            onSubmit={(title, content)=>{
                editBlogPost(id ,title,content,()=> navigation.pop());
            }}
           />
}

const styles = StyleSheet.create({
 
});

export default EditScreen;