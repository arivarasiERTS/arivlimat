import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View,Button } from 'react-native';
import {styles} from "../../Style";

export default function Loginoptions({navigation}) {

  return (
    <View style={styles.container}>

    <Text>Login Options</Text>

    <Button 
        title="QR Scanner"
        onPress={() => navigation.navigate("QRscanner")}
      />

    <Button 
        title="Continue as Guest"
        onPress={() => navigation.navigate("Guest")}
      />
      <StatusBar style="auto" />
    </View>
  );
}