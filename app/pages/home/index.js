import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomePage({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      
      <Button
      title="Calculadora"
      onPress={() =>
        navigation.navigate('Calculator')
      }
      />
      <Button
      title="Lista de usuários"
      onPress={() =>
        navigation.navigate('Users')
      }
    />
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
    gap:15
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  
});
