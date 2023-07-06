import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { SocialIcon } from 'react-native-elements';

const App = () => {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Button
                    onPress={toggleBottomNavigationView}
                    title="Show Bottom Sheet"
                />
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View style={styles.bottomNavigationIneerView}>
                            <Text style={styles.bottomSheetTitle}>
                                Share Using
                            </Text>
                            <View style={styles.iconView}>
                                <SocialIcon
                                    type="twitter"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('medium');
                                    }}
                                />
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('instagram');
                                    }}
                                />
                            </View>
                            <View style={styles.iconView}>
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('instagram');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="twitter"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        toggleBottomNavigationView();
                                        alert('medium');
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetTitle: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20
    },
    bottomNavigationIneerView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    iconView: {
        flex: 1, 
        flexDirection: 'row',
    }
});

export default App;