import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View,Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {styles} from "../../Style";

export default function QRscanner({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Scan QR code')
  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })()
    }
  
    // Request Camera Permission
    useEffect(() => {
      askForCameraPermission();
    }, []);
  
    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setText(data)
      console.log('Type: ' + type + '\nData: ' + data)
    };
  
    // Check permissions and return the screens
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text>Requesting for camera permission</Text>
        </View>)
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View>)
    }
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
    <Button 
        title="Continue as Guest"
        onPress={() => navigation.navigate("Guest")}
      />
      <StatusBar style="auto" />
    </View>
  );
}