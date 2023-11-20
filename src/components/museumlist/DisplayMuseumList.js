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
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getMuseums(selectedLId);
  },[selectedLId]);

  const getMuseums =  async selectedLId =>{
    const data = await fetchMuseums(selectedLId);
    console.log(selectedLId);
    console.log('Museums');
    console.log(data);
    setMuseum(data);
    //console.log(selectedId);
    setLoading(false);
  }
  //const renderItem = ({ item, index })
  //<Image style={{width: 51,height: 51, resizeMode: 'contain',}}
  //source={{uri: 'data:image/png;base64,Museum.imageUrl'}}/>

  const renderItem = ({ item: Museum , index: index }) => (
    <Card>
         <TouchableOpacity onPress={() => {setSelectedId(Museum.id),navigation.push("SelectedMuseum",selectedId)}}>
         <Text>{Museum.name}</Text>
         <Image style={{width: 300,height: 400, resizeMode: 'contain',}}
           source={{uri: Museum.imageUrl}}/>
        </TouchableOpacity>
    </Card>
);
/*source={{ uri: URL + '/' + item.user_image}}
// include at least width and height!
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>*/

//<Image source ={{uri: Museum.imageUrl}} style={{width:100, height:100}}></Image>
  return (
      <SafeAreaView style={styles.container}>
          <Text> Search Museums</Text>
         
            <FlatList
            data={Museum}
            renderItem={renderItem}
            //keyExtractor={Museum => Museum.id}
            />    
            
     </SafeAreaView> 
  );
}