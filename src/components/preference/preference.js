import React from 'react';
import { Text,View,Button,Modal,Alert } from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';

export default function Preference() {
  const {params: selectedId} = useRoute();
 // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <Modal
    animationType="slide"
    transparent={true}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={styles.container}>
        <Text>Select</Text>
    <Button 
        title="Audio"
        onPress={() => navigation.navigate("SelectedMuseumAudioScreen",selectedId)}
      />
        <Button 
        title="SignLanguage"
        onPress={() => navigation.navigate("SelectedMuseumVideoScreen",selectedId)}
      />
     </View>
      </Modal>
  );
}