import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Instancia do stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   //Navigation
   //Conatainer
   //Stack Navigation
   //Stack Secreen

   <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen
      //Nome da tela
      name='Navegacao'
      //Componente que sera chamado
      component={Navegacao}
      options={{title: 'Navegacao'}}
      />

    </Stack.Navigator>
   </NavigationContainer>
  );
}