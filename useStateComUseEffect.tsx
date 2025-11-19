import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [num2, setNum2] = useState(16)

  function mult ()
  {
    setNum2(prev => prev * 2) 
  }

  function divi ()
  {
    setNum2(prev => prev / 2)
  }

  useEffect(() => {
    if (num2 == 1 || num2 == 128){
      return Alert.alert("Valor limite!\n Use a outra operação!")
    }
  }, [num2])


  return (
    <View style={styles.container}>
        <View style={styles.boxnumero}>
          <Text style={styles.numero}>{num2}</Text>
        </View>
        <View style={styles.boxBotao}>
          <TouchableOpacity 
          style={styles.botao}
          onPress={() => mult()}
          >
            <Text style={styles.textoBotao}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity  
          style={styles.botao}
          onPress={() => divi()}
          >
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  boxnumero:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#0cff',
    margin: 10,
    borderRadius: 20
  },
  numero:{
    fontSize: 75,
    fontWeight: 'bold'
  },
  boxBotao:{
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  botao:{
    width: 100,
    height: 100,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5fff'
  },
  textoBotao: {
    fontSize: 50,
    color: '#fff'
  }
});
