import React, { useEffect, useState } from 'react';
import { FlatList,Text,Image,TouchableOpacity,View,ScrollView,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchMuseums} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DisplayMuseumList() {
  const {params: selectedLId} = useRoute();
  const [Museum, setMuseum] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getMuseums(selectedLId);
  },[selectedLId]);

  const getMuseums =  async selectedLId =>{
    const data = await fetchMuseums(selectedLId);
    console.log(selectedLId);
    console.log('Museums');
    setMuseum(data);
    setLoading(false);
  }
  const renderItem = ({ item: Museum }) => (
    <Card>
         <TouchableOpacity onPress={() => {setSelectedId(Museum.id),navigation.push("SelectedMuseum",selectedId)}}>
         <Text>{Museum.name}</Text>
        <Image source ={{uri: Museum.imageUrl}}></Image>
        </TouchableOpacity>
    </Card>
);

  return (
      <SafeAreaView style={styles.container}>
          <Text> Search Museums</Text>
         
            <FlatList
            data={Museum}
            renderItem={renderItem}
            keyExtractor={Museum => Museum.id}
            />    
            
     </SafeAreaView> 
  );
}