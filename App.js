import Welcome from "./src/home/welcome";
import Loginoptions from "./src/home/loginoptions";
import Chooselanguage from "./src/home/chooselanguage";
import Guest from "./src/login/Guest";
import QRscanner from "./src/login/QRscanner";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Loginoptions"
          component={Loginoptions}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Chooselanguage"
          component={Chooselanguage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Guest"
          component={Guest}
          options={{headerShown: true}}
        />
         <Stack.Screen 
          name="QRscanner"
          component={QRscanner}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}