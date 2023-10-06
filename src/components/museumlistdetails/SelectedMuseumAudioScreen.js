import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View} from 'react-native';

function SelectedMuseumAudioScreen(){

return (
    <SafeAreaView>
      <ScrollView>
      <View>
      <Text>Welcome</Text> 
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default SelectedMuseumAudioScreen;
