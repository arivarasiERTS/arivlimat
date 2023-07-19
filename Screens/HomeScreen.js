import React from 'react';
import { StyleSheet,Button,Text, View } from 'react-native';

const HomeScreen = (props) => {

    const gotoTestStackScreen = () => {
        props.navigation.navigate('Test');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>HomeScreen!</Text>
            </View>
            <Button title="Go to test test screen" onPress={gotoTestStackScreen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default HomeScreen;