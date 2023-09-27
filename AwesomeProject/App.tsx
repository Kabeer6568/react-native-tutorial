

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

import { NavigationContainer } from '@react-navigation/native';


import Home from './screens/Home';
import TabsScreen from './screens/TabsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}



const App = () => {
  return (

    // <Home />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tabs Screen" component={TabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

// const App = () => {



//   return (

    
//       <NavigationContainer>

//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>

//       </NavigationContainer>
    

//   );
// };


export default App;
