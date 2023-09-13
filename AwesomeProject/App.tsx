

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



const App = () => {

  
  
  return (
    <>
      <BioData />

      <UseState />
    </>
  );
};


export default App;
