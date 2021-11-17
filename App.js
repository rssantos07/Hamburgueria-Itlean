import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/inicial';
import Cardapio from './src/cardapio';
import Compra from './src/compra';
import Finalizar from './src/Finalizado';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <StatusBar/>
    
    <Stack.Navigator initialRouteName={Inicial} screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="Compra" component={Compra}/>
      <Stack.Screen name="Finalizar" component={Finalizar} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
