import React from 'react';
import MyTabs from './components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );}