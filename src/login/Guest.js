import { StatusBar } from 'expo-status-bar';
import { Text, View,Button } from 'react-native';
//import {styles} from "./Style";
import {styles} from "../../Style";

export default function Guest({navigation}) {
  return (
    <View style= {styles.container}>

    <Text>Welcome Guest</Text>
    <Button 
        title="home"
        onPress={() => navigation.navigate("Welcome")}
      />
      <StatusBar style="auto" />
    </View>
  );
}