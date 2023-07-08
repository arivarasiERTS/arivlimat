import React, { Component } from 'react';
import { Share, View, Button,Text } from 'react-native';

class ShareExample extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://www.nicesnippets.com/',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={{ margin: 20 }}>
        <Text style={{ marginVertical:40,fontSize: 18 }}>React Native Share link Example</Text>
        <Button onPress={this.onShare} title="Share" />
      </View>
    );
  }
}
export default ShareExample;