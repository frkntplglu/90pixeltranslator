import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';



function Translator({ navigation }) {
  const [givenWord, setGivenWord] = useState('');
  const [translatedWord, setTranslatedWord] = useState('');

   
  const API_KEY = 'trnsl.1.1.20200424T122125Z.b8d4ef6b0ea1a86e.0be87b1d44630e5409e78bd4256757b2745c9f26';
  const translate = (word) =>{
    
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${word}&lang=en`)
    .then(response => response.json())
    .then(data => setTranslatedWord(data.text[0]));
    setGivenWord('')
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.content}>
          <Text style={{fontSize:36,textAlign: 'center'}}>Welcome to Translate</Text>
          <View>
            <TextInput onChangeText={(value) => setGivenWord(value) }  value={givenWord} placeholder="Type a word" style={styles.textInput}></TextInput>
          </View>
            <TouchableOpacity onPress={() => translate(givenWord)} style={styles.loginBtn}><Text style={{textAlign: 'center',
      lineHeight: 60, fontSize: 20, color: '#d92c2b'}}>Translate</Text></TouchableOpacity>
            <Text style={{fontSize:18, textAlign: 'center', marginTop: 30}}>{translatedWord}</Text>
          
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
  content: {
    padding: 30
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

export default Translator;
