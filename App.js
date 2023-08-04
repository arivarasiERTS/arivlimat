import React,{useState} from 'react';
import './assets/i18n/i18n';
import {View, Text,Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

import {
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const App = () => {
	
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  /*
    const onSuccess = (e) => {
    console.log(e.data);
    // e.data contains the QR code data
  };

  return (
    <QRCodeScanner onRead={onSuccess} />
  );
   */

  return (
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );

const {t, i18n} = useTranslation();

const [currentLanguage,setLanguage] =useState('en');

const changeLanguage = value => {
	i18n
	.changeLanguage(value)
	.then(() => setLanguage(value))
	.catch(err => console.log(err));
};

return (
<View
		style={{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		}}>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
		{t('hello')}{' '}
		</Text>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
		{t('this line is translated')}
		</Text>
		<Pressable
		onPress={() => changeLanguage('en')}
		style={{
			backgroundColor:
			currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>Select English</Text>
		</Pressable>
		<Pressable
		onPress={() => changeLanguage('hi')}
		style={{
			backgroundColor:
			currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>हिंदी का चयन करें</Text>
		</Pressable>
	</View>
);
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;
