import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'

const RegisterScreen = ({navigation}) => {
  return (<View style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register Screen</Text>
        <Button
          style={{
            marginTop: 10
          }}
          onPress={() => {
            navigation.navigate('Login')
          }}
        >Register</Button>
      </Layout>
  </View>)
}

export default RegisterScreen