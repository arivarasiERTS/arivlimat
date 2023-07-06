import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text,View,Button,TouchableOpacity,ToastAndroid } from 'react-native';
import {styles} from "../../Style";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    en: {
      welcome: "hello",
      chooselanguage: "Choose Language",
      languageisset: "Language is set",
      next: "Next",
    },
    fr:{
      welcome: "Bonjour",
      chooselanguage: "Choisissez la langue",
      languageisset: "la langue est définie",
      next: "suivante",
    }
  };

const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback= true;

export default function Chooselanguage({navigation}) {
    const [locale,setLocale] = useState(i18n.locale);
    const changeLocale = (locale) => {
      i18n.locale= locale;
      setLocale(locale);
      ToastAndroid.show('Language is set', ToastAndroid.SHORT);};
  return (
    <View style ={styles.container2}>
      <Text style ={styles.header}>{i18n.t('welcome')}</Text>
      
      <Text style ={styles.text}>{i18n.t('chooselanguage')}</Text>
      <TouchableOpacity onPress= {()=> changeLocale('en')}>
      <Text style ={styles.langText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> changeLocale('fr')}>
      <Text style ={styles.langText}>French</Text>
      </TouchableOpacity>
      <Text style ={styles.welcomeText}></Text> 
  
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Loginoptions")}>
    <Text style ={styles.welcomeText}>{i18n.t('next')}</Text> 
      </TouchableOpacity>
        
    
      <StatusBar style="auto" />
    </View>
    </View>

  );
}