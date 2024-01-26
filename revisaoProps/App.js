import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/person/person';

export default function App() {
  return (
   <SafeAreaView>
    <StatusBar/>
    <Person name='Marcelo' age='19'/>
    <Person name='Carlos' age='37'/>
    <Person name='Eduardo' age='47'/>
   </SafeAreaView>
  );
}