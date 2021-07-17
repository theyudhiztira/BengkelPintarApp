import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { AuthContext } from '../../context/authContext'

const Welcome = ({ navigation }) => {
  const authContext = React.useContext(AuthContext)
  
  return (<View style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome</Text>
        <Button onPress={() => {
          navigation.navigate('Login')
        }}>Masuk</Button>
        <Button onPress={() => {
          navigation.navigate('Register')
        }} style={{marginTop: 5}}>Daftar</Button>
      </Layout>
  </View>)
}

export default Welcome