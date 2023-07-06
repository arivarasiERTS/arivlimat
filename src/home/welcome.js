import { StatusBar } from 'expo-status-bar';
import { Text, View,Button } from 'react-native';
import {styles} from "../../Style";

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
    <Button 
        title="Click to Continue"
        onPress={() => navigation.navigate("Chooselanguage")}
      />
      <StatusBar style="auto" />
    </View>
  );
}