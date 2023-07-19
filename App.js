import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import ImageScreen from './Screens/ImageScreen';
import CartScreen from './Screens/CartScreen';
import TestScreen from './Screens/TestScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <TestScreen {...props} />}
            >
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Image' component={ImageScreen} />
                <Drawer.Screen name='Cart' component={CartScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;