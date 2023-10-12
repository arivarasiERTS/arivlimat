import React from 'react';
import { Text,View,Button } from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';

export default function SelectedMuseum() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Select Museum</Text>
    <Button 
        title="Audio"
        onPress={() => navigation.navigate("SelectedMuseumAudioScreen")}
      />
        <Button 
        title="SignLanguage"
        onPress={() => navigation.navigate("SelectedMuseumVideoScreen")}
      />
     </View>
  );
}