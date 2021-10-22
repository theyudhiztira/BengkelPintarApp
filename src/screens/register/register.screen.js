import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../../context/authContext';
import {useContextMultipleForm, useContextRegister} from '../../context/formContext';
import { registerHandler } from './register.handler';
import StepOne from './step_one';
import StepTwo from './step_two';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1
  },
  input: {
    backgroundColor: '#212020',
    marginBottom: 15,
    borderWidth: 0
  },
  btnPrimary: {
    fontSize: 18,
    fontFamily: 'WorkSans-Reguler'
  },
});

const iconPhone = (props) => (
  <Text style={{paddingRight: 5, borderRightWidth: 1, borderRightColor: "grey"}}>
    <Icon {...props} name='smartphone-outline'/>
  </Text>
);

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const RegisterScreen = ({navigation}) => {
  const authContext = React.useContext(AuthContext);
  const multiStepFormContext = useContextMultipleForm();
  const registerContext = useContextRegister();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const BackAction = () => (
    <TopNavigationAction 
      icon={BackIcon}
      onPress={()=>{
        navigation.navigate('WELCOME')
      }}
    />
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  // console.log(registerContext.registerData);

  const registerServices = async (registerData) => {
    const {status, data, message} = await registerHandler(registerData);


     if(!status){
      return alert(message);
    }

    await AsyncStorage.setItem('bp_token', data.accessToken);

    const checkToken = await AsyncStorage.getItem('bp_token');

    return authContext.setIsLoggedIn(true);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <TopNavigation
        style={{backgroundColor: 'transparent'}}
        accessoryLeft={BackAction}
      />
      <Layout style={{ flex: 1, backgroundColor: '#transparent', paddingHorizontal: 16}}>
        <Layout style={{ minHeight: 120, backgroundColor: 'transparent' }}>
          <Text style={{fontFamily: 'WorkSans-Bold'}} category='h3'>Daftar Akun</Text>
          <Text style={{fontFamily: 'Cabin', opacity: .8}}>Lengkapi data diri dulu ya bro</Text>
        </Layout>
        <Layout style={{ backgroundColor: 'transparent' }}>
          <Input
            style={styles.input}
            value={registerContext.registerData.name || ''}
            placeholder='Nama'
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, name: nextValue})}
          />
          <Input
            style={styles.input}
            // label='Nomor Telepon'
            accessoryLeft = {iconPhone}
            value={registerContext.registerData.phone || ''}
            placeholder='Contoh: 085811733128'
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, phone: nextValue})}
          />
          <Input
            style={styles.input}
            value={registerContext.registerData.email || ''}
            placeholder='Email'
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          <Input
            style={styles.input}
            value={registerContext.registerData.password || ''}
            placeholder='Password'
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, password: nextValue})}
          />
          <Input
            style={styles.input}
            value={registerContext.registerData.password_confirmation || ''}
            placeholder='Password Confirmation'
            // accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, password_confirmation: nextValue})}
          />
        </Layout>
        <Button
          style={{
            marginTop: 40
          }}
          onPress={async () => await registerServices(registerContext.registerData)}
        >
          <Text style={styles.btnPrimary}>
            Daftar
          </Text>
        </Button>
      </Layout>
    </View>
  )
}

export default RegisterScreen