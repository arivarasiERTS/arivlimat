import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  container2: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header:{
    fontSize:32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop : 80
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    color: 'red'
  },
  langText:{
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    backgroundColor: '#DDDDDD',
    color: 'blue'
  },
  welcomeText:{
    fontSize:50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    color: 'red'
  }
});

export { styles };