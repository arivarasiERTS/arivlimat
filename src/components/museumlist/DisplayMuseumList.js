import React, { useEffect, useState } from 'react';
import { FlatList,Text,Image,View,ScrollView,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchMuseums} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DisplayMuseumList() {
  const [Museum, setMuseum] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getMuseums();
  },[]);

  const getMuseums = async ()=>{
    const data = await fetchMuseums();
    console.log('Museums');
    setMuseum(data);
    setLoading(false);
  }
  const renderItem = ({ item: Museum }) => (
    <Card>
        <Text>{Museum.name}</Text>
    </Card>
);

  return (
      <SafeAreaView style={styles.container}>
          <Text>Museums List</Text>
            <FlatList
            data={Museum}
            renderItem={renderItem}
            keyExtractor={Museum => Museum.id}
            />       
     </SafeAreaView> 
  );
}