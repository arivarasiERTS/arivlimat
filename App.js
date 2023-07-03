import * as React from 'react';
import { View, StyleSheet, Button, Text, Pressable } from 'react-native';
import * as Speech from 'expo-speech';
import {FF} from './util/config.js';

export default function App() {
  const thingToSay = "Reading content 1 text";
  const speak = () => {
    Speech.speak(thingToSay);
  };
  const thingToSay1 = "Reading content 2 text";
  const thingToSay2 = "Reading content 3 text";
  const speak1 = () => {
    Speech.speak(thingToSay1);
  };
  const speak2 = () => {
    Speech.speak(thingToSay2);
  };
return (
    <View style={styles.container}>
      <Text style={styles.Texts}>{thingToSay}</Text>
      <Button title="Start listening" onPress={speak} />
      {FF.f1 && <Pressable onPress={speak1}
      >
      <Text style={styles.Texts}>{thingToSay1}</Text>
      </Pressable>}
      {FF.f2 && <Pressable onPress={speak2}
      >
      <Text style={styles.Texts}>{thingToSay2}</Text>
      </Pressable>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Texts: {
    marginTop: 10,
    color: 'black',
    padding:10,
  }
})