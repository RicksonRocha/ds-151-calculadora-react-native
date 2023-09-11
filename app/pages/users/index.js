import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet, Text, TextInput, View
} from 'react-native';
import ButtonHomePage from '../../components/button/HomePage';

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default function Users({navigation}) {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const getUsers = async (search) => {
    try {
      let resource = '/users'
      if (search) {
        resource += `/?username=${search}`
      }
      console.log('resource', resource)
      const response = await axios.get(ENDPOINT + resource)
      setUsers(response.data)
    }catch (error) {
      console.log('error', error.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Lista de usuários api pública</Text>
        <TextInput style={styles.input} placeholder="Pesquise um nome..." value={search} onChangeText={(e) => setSearch(e)}/>
        <Button
          title={search == '' && users.length == 0 ? 'Limpar': "Pesquisar"}
          onPress={() =>
            getUsers(search)
          }
        />
        {search !== '' && users.length == 0 ? <Text style={styles.title}>Nenhum usuário com esse nome</Text> : 
        
        <FlatList
          style={styles.list}
          data={users}
          renderItem={(user) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{user.item.username}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        />
        }
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
    gap: 8
  },
  list: {
    maxHeight: 450
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    marginTop:10,
    width: '50%',
    borderStyle: 'solid',
    textAlign:'center'
  },
});
