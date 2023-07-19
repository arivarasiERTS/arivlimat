import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ImageScreen from './Screens/ImageScreen';
import TestScreen from './Screens/TestScreen';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{  
                    tabBarIcon:({ color,focused }) => (
                        <Icon name='home' size={focused ? 25 : 20} color={color}  />
                    ),
                }}    
            />
            <Tab.Screen 
                name="Cart"
                component={CartScreen}
                options={{  
                    tabBarIcon:({ focused, color }) => (
                        <Icon name='cart' size={focused ? 25 : 20}  color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Images"
                component={ImageScreen}
                options={{  
                    tabBarIcon:({ focused, color }) => (
                        <Icon name='images' size={focused ? 25 : 20}  color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Tabs"
                screenOptions={{
                    headerTitle:'Logo',
                    
                }}
            >
                <Stack.Screen 
                    name="Test"
                    component={TestScreen}
                    options={{
                        headerShown: true,
                        headerTitle:'Test',
                    }}
                />
                <Stack.Screen name="Tabs" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;