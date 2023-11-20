import React from 'react';

import Welcome from "./src/components/home/welcome";
import Preference from "./src/components/preference/preference";
import Useroption from "./src/components/preference/useroption";
import DisplayMuseumList from "./src/components/museumlist/DisplayMuseumList";
import SelectedMuseum from "./src/components/museumlist/SelectedMuseum";
import SelectedMuseumAudioScreen from "./src/components/museumlistdetails/SelectedMuseumAudioScreen";
import SelectedMuseumVideoScreen from "./src/components/museumlistdetails/SelectedMuseumVideoScreen";
import ChooseCollection from "./src/components/collectionlist/ChooseCollection";
import QRscanner from "./src/components/collectionlist/QRscanner";
import AudioplayScreen from "./src/components/collectionlistdetails/AudioplayScreen";
import VideoplayScreen from "./src/components/collectionlistdetails/VideoplayScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
       <Stack.Screen 
          name="Preference"
          component={Preference}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="Useroption"
          component={Useroption}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="DisplayMuseumList"
          component={DisplayMuseumList}
          options={{headerShown: false}}
        />
       <Stack.Screen 
          name="SelectedMuseum"
          component={SelectedMuseum}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SelectedMuseumAudioScreen"
          component={SelectedMuseumAudioScreen}
          options={{headerShown: false}}
        />
       <Stack.Screen 
          name="SelectedMuseumVideoScreen"
          component={SelectedMuseumVideoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ChooseCollection"
          component={ChooseCollection}
          options={{headerShown: false}}
        />
       <Stack.Screen 
          name="QRscanner"
          component={QRscanner}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="AudioplayScreen"
          component={AudioplayScreen}
          options={{headerShown: false}}
        />
       <Stack.Screen 
          name="VideoplayScreen"
          component={VideoplayScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}