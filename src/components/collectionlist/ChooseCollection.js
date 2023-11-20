import React, { useEffect, useState } from 'react';
import { FlatList,Text,TouchableOpacity,Image,View,ScrollView,Modal,Alert,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';
import {fetchCollections} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChooseCollection() {
  const {params: selectedId} = useRoute();
  const [Collection, setCollection] = useState([]);
  const [selectedCId, setSelectedCId] = useState("1");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getCollections(selectedId);
  },[selectedId]);

  const getCollections =  async selectedId =>{
    const data = await fetchCollections(selectedId);
    console.log(selectedId);
    console.log(selectedCId);
    console.log('Collections');
    setCollection(data);
    setLoading(false);
  }
  const renderItem = ({ item: Collection }) => (
    <Card>
        <TouchableOpacity  onPress={() => {setSelectedCId(Collection.id),navigation.navigate("AudioplayScreen",{selectedCId,selectedId})}}>
         <Text>{Collection.name}</Text>
         <Image style={{width: 300,height: 400, resizeMode: 'contain',}}
           source={{uri: Collection.imageUrl}}/>
        </TouchableOpacity>
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