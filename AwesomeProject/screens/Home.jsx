

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

import BioData from '../components/BioData';
import UseState from '../components/UseState';
import Props from '../components/Props';
import AllInOne from '../components/AllInOne';
import Tabs from '../components/Task';
import TabsScreen from './TabsScreen';
// import HoverableButton from './components/HoverableButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({navigation}) => {



  return (

    <ScrollView>
      
      <Button title='Go To tabs' onPress={() => navigation.navigate('Tabs Screen')} />
        <BioData />

        <UseState />

        <Props />

        <AllInOne />

        
      
    </ScrollView>

  );
};


export default Home;
