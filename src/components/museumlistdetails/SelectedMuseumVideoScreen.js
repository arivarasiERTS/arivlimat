import React from 'react';
import { Text,View,Button } from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';

export default function SelectedMuseumVideoScreen() {

const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Video</Text>
        <Button 
        title="Choose Collection"
        onPress={() => navigation.navigate("ChooseCollection")}
      />
        <Button 
        title="QRscanner"
        onPress={() => navigation.navigate("QRscanner")}
      />
     </View>
  );
}