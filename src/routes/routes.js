import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome'
import Home from '../pages/Home/Home'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            />
        </Stack.Navigator>
    )
}