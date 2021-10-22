import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Layout, Text, Button, Input, Icon, TopNavigationAction, TopNavigation } from '@ui-kitten/components'
import { AuthContext } from '../../context/authContext'
import style from './login.style'
import { loginHandler } from './login.handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }) => {
  const authContext = React.useContext(AuthContext);

  // console.log(authContext);

  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
  );
  
  const BackAction = () => (
    <TopNavigationAction 
      icon={BackIcon}
      onPress={()=>{
        navigation.navigate('WELCOME')
      }}
    />
  );

  const loginServices = async (loginData) => {
    const {status, data, message} = await loginHandler(loginData)
    // console.log(status, data, message)

    if(!status){
      return alert(message);
    }

    await AsyncStorage.setItem('bp_token', data.accessToken);

    const checkToken = await AsyncStorage.getItem('bp_token');
    // console.log(checkToken);

    return authContext.setIsLoggedIn(true);
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <TopNavigation
        accessoryLeft={BackAction}
      />
      <Layout style={{ paddingTop: '40%', paddingHorizontal: 15, height: "100%" }}>
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
              onPress={async () => await loginServices({email, password})}
            >
              Masuk
            </Button>
          </View>
        </SafeAreaView>
      </Layout>
    </View>
  )
}

export default LoginScreen