

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
import Tabs from './components/Task';
import HoverableButton from './components/HoverableButton';


const App = () => {

  
  
  return (
    <>
    <ScrollView>

      <BioData />

      <UseState />

      <Props />

      <AllInOne />

      <Tabs />
      

      </ScrollView>
    </>
  );
};


export default App;
