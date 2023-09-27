

import React from 'react';

import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import Tabs from '../components/Task';
// import HoverableButton from './components/HoverableButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const TabsScreen = ({navigation}) => {



  return (

    <ScrollView>
      
        <Tabs />

        <Button title='Go Back To Home' onPress={()=> navigation.navigate('Home')} />
      
    </ScrollView>

  );
};


export default TabsScreen;
