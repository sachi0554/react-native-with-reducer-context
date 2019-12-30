import React from 'react'
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screen/indexScreen';
import ShowScreen from './src/screen/showScreen';
import CreateScreen from './src/screen/createScreen'
import  {Provider} from './src/context/blogContext';

 const navigator = createStackNavigator({
   Index : IndexScreen,
   Display:ShowScreen,
   Create:CreateScreen
 },{
    initialRouteName:'Index',
    defaultNavigationOptions:{
      title:'blogs'
    }
 });
 const App = createAppContainer(navigator)
export default ()=>{
  return <Provider>
         <App/>
    </Provider>
};