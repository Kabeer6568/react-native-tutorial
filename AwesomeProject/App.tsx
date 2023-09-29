

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import Home from './screens/Home';
import TabsScreen from './screens/TabsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreLoader from './components/PreLoader';

const Stack = createNativeStackNavigator();


const App = () => {

  const [isLoading, setIsloading] = useState(true)

  setTimeout(()=>{
    setIsloading(false)
  }, 3000);

  return (

    <>
    {isLoading ? (<PreLoader />) : (

<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Tabs Screen" component={TabsScreen} />
</Stack.Navigator>
</NavigationContainer>

    )}
    
</>

  );
}



export default App;
