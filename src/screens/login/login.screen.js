import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Layout, Text, Button, Input } from '@ui-kitten/components'
import { AuthContext } from '../../context/authContext'
import style from './login.style'

const LoginScreen = ({ navigation }) => {
  const authContext = React.useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 15 }}>
      <SafeAreaView>
        <View style={style.textContainer}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 43
        }}>Masuk</Text>
        <Text>Silakan masukan email dan password yang terdaftar</Text>
      </View>
      <View style={style.inputContainer}>
        <Input placeholder='Email' onChangeText={(value) => setEmail(value)} style={style.input} />
        <Input placeholder='Password' onChangeText={(value) => setPassword(value)} secureTextEntry style={style.input} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Button
          onPress={() => {
            console.log(email, password)
          }}
        >
          Register
        </Button>
      </View>
      </SafeAreaView>
    </Layout>
  )
}

export default LoginScreen