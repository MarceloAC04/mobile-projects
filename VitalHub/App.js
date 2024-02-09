import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegation } from './src/screens/Navegation/Navegation';
import { Login } from './src/screens/Login/Login';
import { Reset } from './src/screens/Reset/Reset';
import { Register } from './src/screens/Register/Register';
import {ConsultationLocation} from './src/screens/ConsultationLocation/ConsultationLocation'

//Instancia do stack navigator
const Stack = createNativeStackNavigator();

import { useFonts, MontserratAlternates_600SemiBold, 
  MontserratAlternates_500Medium, 
  MontserratAlternates_700Bold,
 } from '@expo-google-fonts/montserrat-alternates';

 import {Quicksand_500Medium, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand';
import { ResetPassword } from './src/screens/ResetPassword/ResetPassword';
import { EmailCode } from './src/screens/EmailCode/EmailCode';
import { UserProfile } from './src/screens/UserProfile/UserProfile';
import { HomeMedic } from './src/screens/HomeMedic/HomeMedic';


export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navigation
    //Conatainer
    //Stack Navigation
    //Stack Secreen
    
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>

        <Stack.Screen
          //Nome da tela
          name='Navegacao'
          //Componente que sera chamado
          component={Navegation}
          options={{ title: 'Navegacao' }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name='Reset'
          component={Reset}
          options={{ title: 'Reset' }}
        />

        <Stack.Screen
          name='Register'
          component={Register}
          options={{ title: 'Register' }}
        />

        <Stack.Screen
          name='EmailCode'
          component={EmailCode}
          options={{ title: 'EmailCode' }}
        />

        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{ title: 'ResetPassword' }}
        />

        <Stack.Screen
          name='UserProfile'
          component={UserProfile}
          options={{title: 'UserProfile'}}
        />

        <Stack.Screen
          name='ConsultationLocation'
          component={ConsultationLocation}
          options={{title: 'ConsultaionLocation'}}
        />

        <Stack.Screen
          name='HomeMedic'
          component={HomeMedic}
          options={{title: 'HomeMedic'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}