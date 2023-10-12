import React, { useEffect, useState } from 'react';
import { FlatList,Text,Image,View,ScrollView,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchCollections} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectedMuseum() {
  const [Collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getCollections();
  },[]);

  const getCollections = async ()=>{
    const data = await fetchCollections();
    console.log('Collections');
    setCollection(data);
    setLoading(false);
  }
  const renderItem = ({ item: Collection }) => (
    <Card>
        <Text>{Collection.name}</Text>
    </Card>
);

  return (
      <SafeAreaView style={styles.container}>
          <Text> Selected Museum Collections List</Text>
            <FlatList
            data={Collection}
            renderItem={renderItem}
            keyExtractor={Collection => Collection.id}
            />       
     </SafeAreaView> 
  );
}