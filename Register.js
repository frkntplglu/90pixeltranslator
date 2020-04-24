import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function Register({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.content}>
          <Text style={{fontSize:36,textAlign: 'center'}}>Register</Text>
          <View>
            <TextInput placeholder="Username" style={styles.textInput}></TextInput>
            <TextInput placeholder="E-Mail" style={styles.textInput}></TextInput>
            
            <TextInput placeholder="Password" style={styles.textInput}></TextInput>
            <TextInput placeholder="Password (Again)" style={styles.textInput}></TextInput>
          </View>
          <TouchableOpacity  onPress={() => navigation.navigate('Translator')}   style={styles.signUpBtn}><Text  style={{textAlign: 'center',
      lineHeight: 60, fontSize: 20, color: 'white'}}>SIGN UP</Text></TouchableOpacity>
          
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
    justifyContent: 'center'
  },
  header: {
    flex:1
  },
  content: {
    flex: 2,
    padding :20,
    justifyContent: 'center',
    paddingBottom: 50
  },
  ImageBackground: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%'
  },
  loginBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#d92c2b',
    borderRadius: 4,
    height: 60,
    width : '100%',
    marginTop: 20
  },
  signUpBtn: {
    backgroundColor: '#d92c2b',
    borderRadius: 4,
    height: 60,
    width : '100%',
    marginTop: 20
  },
  btnText: {
    backgroundColor: 'pink',
    width: '100%',
    height: '100%',
    
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 60,
    fontSize: 16
  }
  
});

export default Register;
