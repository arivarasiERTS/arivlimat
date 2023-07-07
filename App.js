import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};