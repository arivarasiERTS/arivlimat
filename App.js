import React from 'react';
import { View, Button, Linking } from 'react-native';

const ExternalLinkBtn = (props) => {
  return <Button
            title={props.title}
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}
          />
}
export default function App() {
    return (
      <View>
        <ExternalLinkBtn title="Example Link" url="https://example.com" />
      </View>
    )
  }