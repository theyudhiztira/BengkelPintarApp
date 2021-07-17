import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { AuthContext } from '../../context/authContext'

const LoginScreen = ({ navigation }) => {
  const authContext = React.useContext(AuthContext)
  return (
    <View style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          style={{
            marginTop: 10
          }}
          onPress={() => {
            navigation.navigate('Register')
          }}
        >Register</Button>
        <Button
            style={{
              marginTop: 10
            }}
            onPress={() => {
              authContext.setIsLoggedIn(!authContext.isLoggedIn)
            }}
          >Sign In</Button>
      </Layout>
    </View>
  )
}

export default LoginScreen