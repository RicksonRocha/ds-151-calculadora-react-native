import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  const [value1, setValue1] = React.useState(0)
  const [value2, setValue2] = React.useState(0)
  const [result, setResult] = React.useState(0)

  React.useEffect(() => {
    setResult(value1 + value2)
  }, [value1, value2])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de média</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder="Nota 1" value={String(value1)} onChangeText={(e) => setValue1(Number(e))}/>
      <TextInput style={styles.input} keyboardType='numeric'  placeholder="Nota 2" value={String(value2)} onChangeText={(e) => setValue2(Number(e))}/>
      <Text style={styles.result(result)} >Resultado: {result}</Text>
      <Text style={styles.footer}>GRR20210545</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    marginTop:10,
    width: '50%',
    borderStyle: 'solid',
    textAlign:'center'
  },
  result: (r) => {
    let color = 'red'
    if (r >= 70) {
      color = 'green'
    } else if (r >= 40) {
      color = 'orange'
    }
    return {
      marginTop: 25,
      color,
      fontSize: 20,
    }
  },
  footer: {
    marginTop: 5,
    fontSize: 15,
  }
});
