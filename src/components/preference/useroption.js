import React from 'react';
import { Text,View,Button,Modal,Alert } from 'react-native';
import {styles} from "../../../Style";
import { useNavigation,useRoute } from '@react-navigation/native';

export default function Useroption() {
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
        title="Select Collection"
        onPress={() => navigation.navigate("ChooseCollection",selectedId)}
      />
        <Button 
        title="QR Scanner"
        onPress={() => navigation.navigate("QRscanner",selectedId)}
      />
     </View>
      </Modal>
  );
}