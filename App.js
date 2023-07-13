import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const App = () => {
    const [totalDuration, setTotalDuration] = useState(0);

    useEffect(() => {
        let date = moment().utcOffset('+ 05:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = '2023-07-15 06:00:00';

        let diffr = moment.duration(moment(expirydate).diff(moment(date)));

        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());

        var d = hours * 60 * 60 + minutes * 60 + seconds;
        
        setTotalDuration(d);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Timer 
                </Text>
                <CountDown
                    until={totalDuration}
                    timetoShow={('H', 'M', 'S')}
                    onFinish={() => alert('finished')}
                    onPress={() => alert('hello')}
                    size={20}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
});

export default App;