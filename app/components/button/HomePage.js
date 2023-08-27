import React from 'react';
import { Button } from 'react-native';


export default function ButtonHomePage({navigation}) {
  return (
    <Button
    title="Página inicial"
    onPress={() =>
      navigation.navigate('Home')
    }
  />
  );
}

