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
import Home from './src/components/screens/HomeScreen';

 const App = () => {
   return (
     <SafeAreaView>
       <Home/>
     </SafeAreaView>
   );
 };

 export default App;
