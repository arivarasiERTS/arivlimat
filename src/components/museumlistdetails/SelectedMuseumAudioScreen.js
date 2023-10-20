import React, { useEffect, useState } from 'react';
import { FlatList,Text,TouchableOpacity,Image,View,ScrollView,Modal,Alert,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';
import {fetchCollections} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectedMuseumAudioScreen() {
  const {params: selectedId} = useRoute();
  const [Collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getCollections(selectedId);
  },[selectedId]);

  const getCollections =  async selectedId =>{
    const data = await fetchCollections(selectedId);
    console.log(selectedId);
    console.log('Collections');
    setCollection(data);
    setLoading(false);
  }
  const renderItem = ({ item: Collection }) => (
    <Card>
        <TouchableOpacity  onPress={() => navigation.navigate("AudioplayScreen")}>
         <Text>{Collection.name}</Text>
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
            <View style={styles.container}>
           <Button 
               title="QRscanner"
               onPress={() => navigation.navigate("QRscanner")}
             />
            </View>
            </SafeAreaView> 
  );
  }