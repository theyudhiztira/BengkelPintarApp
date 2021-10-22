import AsyncStorage from '@react-native-async-storage/async-storage'
import { Layout, Text, Button } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { AuthContext } from '../../context/authContext'
  

const HomeScreen = () => {
  const authContext = React.useContext(AuthContext)

  return (<View style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            style={{
              marginTop: 10
            }}
            onPress={async () => {
              await AsyncStorage.removeItem('bp_token')
              await authContext.setIsLoggedIn(!authContext.isLoggedIn)
            }}
          >Sign Out</Button>
      </Layout>
  </View>)
}

export default HomeScreen