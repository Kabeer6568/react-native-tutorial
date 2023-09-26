

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BioData from './components/BioData';
import UseState from './components/UseState';
import Props from './components/Props';
import AllInOne from './components/AllInOne';



const App = () => {

  
  
  return (
    <>
    <ScrollView>
      
      <BioData />

      <UseState />

      <Props />

      <AllInOne />

      </ScrollView>
    </>
  );
};


export default App;
