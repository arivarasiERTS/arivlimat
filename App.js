import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    source={{
                        uri:'https://www.nicesnippets.com/image/nice-logo.png?ezimgfmt=rs:238x47/rscb1/ng:webp/ngcb1',
                    }}
                    style={styles.img1}
                    contentFit='contain'
                />
                <Image 
                    source={require('./assets/cup.jpg')}
                    style={styles.img2}
                    contentFit='contain'
                />
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        marginTop:150,  
    },
    img1: {
        width:350,
        height:150,
    },
    img2: {
        width:500,
        height:200,
        marginVertical:10,
        borderRadius:20,
    },
});