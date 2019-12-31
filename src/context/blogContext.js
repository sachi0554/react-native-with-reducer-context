import createDataContext from './createDataContext'



const blogReducer =(state, action)=>{
   switch (action.type) {
       case 'add_blogpost':
           return [...state, {id:Math.floor(Math.random()*99999),title:action.playload.title, content:action.playload.content}]
       case 'delete_blogpost':
            return state.filter((blogpost)=> blogpost.id !== action.playload)
       case 'edit_blogpost':
             return state.map((blogpost)=>{
                return blogpost.id === action.playload.id 
                ? action.playload
                : blogpost;
             })
       default:
          return state
   }
};
const addBlogPost=(dispatch)=>{
    return (title,content,callback)=>{
    dispatch({type:'add_blogpost', playload:{title,content}});
    if(callback){
        callback();
    }

    };
};

const deleteBlogPost=(dispatch)=>{
    return (id)=>{
    dispatch({type:'delete_blogpost', playload:id});
    };
};

const editBlogPost=(dispatch)=>{
    return (id,title,content,callback)=>{
    dispatch({type:'edit_blogpost', playload:{id,title,content}});
    if(callback){
        callback();
    }
    };
};
export const {Context , Provider}= createDataContext(blogReducer , {addBlogPost,deleteBlogPost,editBlogPost},[]);

