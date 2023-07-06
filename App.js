import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

const App = () => {
    const [isVisible, setisVisible] = useState(true);

    const width = new Animated.Value(0);
    const height = new Animated.Value(0);
    const IMAGE = 'https://tsc-website-production.s3.amazonaws.com/uploads/2018/05/React-Native.png';
    //const IMAGE1 = 'https://www.nicesnippets.com/image/nice-logo.png';
       useEffect(() => {
        Animated.timing(
            width,
            {
                toValue: 360,
                duration: 1200,
                useNativeDriver: false,
            },
        ).start();

        Animated.timing(
            height,
            {
                toValue: 100,
                duration: 1200,
                useNativeDriver: false,
            },
        ).start();
    }, []);

    const Hide_Splash_Screen = () => {
        setisVisible(false);
    }

    useEffect(() => {
        let myTimeout = setTimeout(() => {
            Hide_Splash_Screen();
        }, 3000);
        return () => clearTimeout(myTimeout);
    }, []);

    const Splash_Screen = () => {
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={{ uri: IMAGE }}
                    style={{
                        width: width,
                        height: height,
                        position: 'absolute',
                    }}
                    resizeMode='cover'
                />
            </View>
        );
    }

    return (
        <>
            {
                (isVisible === true) ? Splash_Screen() : (
                     <View style={styles.container}>
                    <Text style={styles.title}>Welcome</Text>
                    </View>
                   
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:23,
        fontWeight:'800',
    },
});

export default App;