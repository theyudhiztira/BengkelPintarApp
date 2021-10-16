import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Layout, Text, Button, Input, Icon, TopNavigationAction, TopNavigation } from '@ui-kitten/components'
import { AuthContext } from '../../context/authContext';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { Axios } from 'axios';

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

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const LoginScreen = ({ navigation }) => {
  const authContext = React.useContext(AuthContext);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const [formLogin, setFormLogin] = React.useState({
    email: null,
    password: null
  });

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

  const handleSubmit = async() => {
    const login = await Axios.post('https://a82fi9kfm5.execute-api.ap-southeast-1.amazonaws.com//auth/login', qs.stringify(formLogin));
    
    // console.log(login);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <TopNavigation
        style={{backgroundColor: 'transparent'}}
        accessoryLeft={BackAction}
      />
      <Layout style={{ flex: 1, backgroundColor: '#transparent', paddingHorizontal: 16}}>
        <Layout style={{ minHeight: 120, backgroundColor: 'transparent' }}>
          <Text style={{fontFamily: 'WorkSans-Bold'}} category='h3'>Masuk</Text>
          <Text style={{fontFamily: 'Cabin', opacity: .8}}>Masukan email dan password untuk masuk ke akunmu</Text>
        </Layout>
        <Layout style={{ backgroundColor: 'transparent' }}>
          <Input
            style={styles.input}
            label='Email'
            name=""
            // accessoryLeft = {iconPhone}
            // value={value}
            placeholder='Contoh: example@email.com'
            onChangeText={value => {
              setFormLogin({...formLogin, email: value})
            }}
          />
          <Input
            style={styles.input}
            label='Password'
            // value={value}
            placeholder='Masukan password'
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={value => {
              setFormLogin({...formLogin, password: value})
            }}
          />
        </Layout>
        <Button
          style={{
            marginTop: 40
          }}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.btnPrimary}>
            Kirimkan
          </Text>
        </Button>
      </Layout>
    </View>
  )
}

export default LoginScreen