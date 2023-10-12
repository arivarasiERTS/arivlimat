import React, { useEffect, useState } from 'react';
import { FlatList,Text,Image,View,ScrollView,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchCollectionDetails} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VideoplayScreen() {
  const [CollectionD, setCollectionD] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getCollectionDetails();
  },[]);

  const getCollectionDetails = async ()=>{
    const data = await fetchCollectionDetails();
    console.log('Collection Details');
    setCollectionD(data);
    setLoading(false);
  }


  return (
      <SafeAreaView style={styles.container}>
          <Text>Collection Details</Text>
            
     <Card>
        <Text>{CollectionD.collectionName}</Text>
    </Card>
             
     </SafeAreaView> 
  );
}