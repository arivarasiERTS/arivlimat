import React, { useEffect, useState } from 'react';
import { FlatList,Text,TouchableOpacity,Image,View,ScrollView,Modal,Alert,Button} from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';
import { Card, Paragraph } from 'react-native-paper';

import {fetchCollections} from '../../api/Service.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectedMuseum() {
  const {params: selectedId} = useRoute();
  //const [modalVisible, setModalVisible] = useState(false);
  //const [selectOption, setselectOption] = useState();
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
    console.log(data);
    setCollection(data);
    setLoading(false);
  }
  const renderItem = ({ item: Collection }) => (
    <Card>
        <TouchableOpacity  onPress={() => navigation.navigate("Preference",selectedId)}>
         <Text>{Collection.name}</Text>
         <Image style={{width: 300,height: 400, resizeMode: 'contain',}}
           source={{uri: Collection.imageUrl}}/>
        </TouchableOpacity>
    </Card>
);

/*function SelectOption(){
return ( 
  <Modal
  animationType="slide"
  transparent={true}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
  <View style={styles.container}>
      <Text>Select Museum</Text>
  <Button 
      title="Audio"
      onPress={() => navigation.navigate("SelectedMuseumAudioScreen")}
    />
      <Button 
      title="SignLanguage"
      onPress={() => navigation.navigate("SelectedMuseumVideoScreen")}
    />
   </View>
    </Modal>
  );
}
*/
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