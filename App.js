import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Platform, StatusBar } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


const App = () => {
    const [totalDuration, setTotalDuration] = useState(0);

    useEffect(() => {
        let date = moment().utcOffset('+ 05:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = '2023-07-13 06:46:00';

        let diffr = moment.duration(moment(expirydate).diff(moment(date)));

        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());

        var d = hours * 60 * 60 + minutes * 60 + seconds;
        
        setTotalDuration(d);
    }, []);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();  
  
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
    
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);
    
    async function registerForPushNotificationsAsync() {
      let token;
      if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      return token;
    }
  
    const sendMesaage = (token) => {
      fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: token,
          title: 'Notification',
          body: 'Subscribe Now',
          data: { data: 'goes here' },
          _displayInForeground: true,
        }),
      });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Scheduled Notification
                </Text>
                <CountDown
                    until={totalDuration}
                    timetoShow={('H', 'M', 'S')}
                    onFinish={() => sendMesaage(expoPushToken)}
                    onPress={() => alert('hello')}
                    size={20}
                />
              
      <StatusBar style="auto" />
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