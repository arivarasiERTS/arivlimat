import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const translations = {
  en: {
    welcome: "hello",
  },
  fr:{
    welcome: "Bonjour",
  }
};
const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback= true;

export default function App(){
  const [locale,setLocale] = useState(i18n.locale);
  const changeLocale = (locale) => {
    i18n.locale= locale;
    setLocale(locale)};
  return(
    <View style ={styles.container}>
      <Text style ={styles.header}>Welcome</Text>
      
      <Text style ={styles.text}>Choose Language</Text>
      <TouchableOpacity onPress= {()=> changeLocale('en')}>
      <Text style ={styles.langText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> changeLocale('fr')}>
      <Text style ={styles.langText}>French</Text>
      </TouchableOpacity>
      <Text style ={styles.welcomeText}>{i18n.t('welcome')}</Text>
    </View>
  )
}
  const styles= StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor:'#fff'
      },
      header:{
        fontSize:32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        marginTop : 80
      },
      text:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        color: 'red'
      },
      langText:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        backgroundColor: '#DDDDDD',
        color: 'blue'
      },
      welcomeText:{
        fontSize:50,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        color: 'red'
      }
    });