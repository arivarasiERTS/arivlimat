import React from 'react';
import { Text,View,Button } from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
    <Button 
        title="Choose Language"
        onPress={() => navigation.navigate('ChooseLang')}
      />
     </View>
  );
}