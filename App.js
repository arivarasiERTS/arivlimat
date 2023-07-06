import React, {  useState, useEffect } from 'react';
import { View, Text,SafeAreaView,StyleSheet, FlatList,Item } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const RestApiLink = () => {
    const [Data, setData] = useState([])
    const API = 'https://jsonplaceholder.typicode.com/posts';
    const fetchPost = () => {
    fetch(API)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        })
    }
    useEffect(() => {
        fetchPost()
    }, []);

    const renderItem = ({ item: post }) => (
        <Card style={styles.cardbox}>
            <Text style={styles.title}>{post.title}</Text>
            <Paragraph>{post.body}</Paragraph>
        </Card>
    );

return(
    <SafeAreaView style={styles.container}>
        <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={Data => Data.id}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    cardbox:{
        marginVertical:8,
        marginHorizontal:5,
        padding: 10,
    },
    title:{
        backgroundColor: '#e2e2e2',
        fontWeight: 'bold', 
        textAlign:  'center',
        borderRadius: 10,
        paddingVertical: 5 ,
    }
});

export default RestApiLink;