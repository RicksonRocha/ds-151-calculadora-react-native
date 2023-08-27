import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet, Text, View
} from 'react-native';
import ButtonHomePage from '../../components/button/HomePage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rickson Rocha',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Diego A G',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'UFPR TADS',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function UserList({navigation}) {
  return (
    
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <ButtonHomePage navigation={navigation} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4,
  },
  title: {
    fontSize: 24,
  },
  
});
