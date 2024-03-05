//importar o recurso do button tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProfile } from "../UserProfile/UserProfile";
import { HomeMedic } from "../HomeMedic/HomeMedic";
const BottomTab = createBottomTabNavigator();

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'


export const Main = () => {
    return(
        <BottomTab.Navigator
            //definir a rota inicial
            initialRouteName="HomeMedic"

            screenOptions={({route}) => ({
                tabBarStyle: {backgroundColor: '#FFFFFF', height: 80, paddingTop: 10},
                tabBarActiveBackgroundColor: 'transparent',
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused}) => {
                    if (route.name === 'HomeMedic') {
                        return(
                            <>
                            
                            </>
                        )
                    } else {
                        
                    }
                }
            })}
        >
            <BottomTab.Screen 
                name="HomeMedic"
                component={HomeMedic}
            />

            

            <BottomTab.Screen 
                name="UserProfile"
                component={UserProfile}
            />
        
        </BottomTab.Navigator>
    )
}