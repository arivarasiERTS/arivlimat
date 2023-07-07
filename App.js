import * as React from 'react'; 
import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import {
    Text, View,
    StyleSheet, FlatList, ActivityIndicator, Platform,
    } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Card} from 'react-native-paper';
 export default class App extends React.Component { constructor(props) {
    super(props);
    this.state = { search: '', isLoading: true }; this.arrayholder = [];
    }
    componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responseJson => { this.setState(
    {
    isLoading: false, dataSource: responseJson,
    },
    function() {
    this.arrayholder = responseJson;
    }
    );
    })
    .catch(error => { console.error(error);
    });
    }
    search = text => { console.log(text);
    };
    clear = () => { this.search.clear();
    };
    SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) { const itemData = item.title ? item.title.toUpperCase() :
    ''.toUpperCase();
    const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
    });
    this.setState({ dataSource: newData, search: text,
    });
    }
    ListViewItemSeparator = () => { return (
    <View
    style={{ height: 0.4,
    width: '89%',
    backgroundColor: '#141313',
    }}
    />
    );
    };
    render() {
    if (this.state.isLoading) { return (
    <View style={{ flex: 1, paddingTop: 21 }}>
    <ActivityIndicator />
    </View>
    );
    }
    return (
    <SafeAreaProvider>
    <SafeAreaView>
    <Card style={styles.cardbox}>
    <SearchBar round
    searchIcon={{ size: 25 }}
    onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="Type Here to Search..." value={this.state.search}
    />
    <FlatList data={this.state.dataSource}
    ItemSeparatorComponent={this.ListViewItemSeparator} renderItem={({ item }) => (
    <Text style={styles.textStyle}>{item.title}</Text>
    )}
    enableEmptySections={true} style={{ marginTop: 11 }}
    keyExtractor={(item, index) => index.toString()}
    />
    </Card>
    </SafeAreaView>
    </SafeAreaProvider>
    );
    }
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
    },
    textStyle: { padding: 11,
    },
    });
    