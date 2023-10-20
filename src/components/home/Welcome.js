import React, { useEffect, useState } from 'react';
import { FlatList,Text,TouchableOpacity,View,ScrollView,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchLanguages} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome() {
  const [language, setLanguage] = useState([]);
  const [selectedLId, setSelectedLId] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getLanguages();
  },[]);

  const getLanguages = async ()=>{
    const data = await fetchLanguages();
    console.log('languages');
    setLanguage(data);
    setLoading(false);
  }
  const renderItem = ({ item: language }) => (
    <Card>
        <TouchableOpacity onPress={() => {setSelectedLId(language.id),alert("language is set")}}>
          <Text>{language.name}</Text>
          </TouchableOpacity>
    </Card>
);

  return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome</Text>
          <Text>Languages List</Text>
            <FlatList
            data={language}
            renderItem={renderItem}
            keyExtractor={language => language.id}
            />   
          <Button 
        title="Search Museums"
        onPress={() => navigation.navigate("DisplayMuseumList")}
      />
                <Button 
        title="Search Collections"
        onPress={() => navigation.navigate("ChooseCollection")}
      />
                   <Button 
        title="Collection Details"
        onPress={() => navigation.navigate("AudioplayScreen")}
      />
     </SafeAreaView> 
  );
}