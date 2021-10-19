import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Button, Input, Icon, TopNavigationAction, TopNavigation } from '@ui-kitten/components';
import { useContextMultipleForm, useContextRegister } from '../../context/formContext';

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


const StepOne = ({navigation}) => {
  const multiStepFormContext = useContextMultipleForm();
  const registerContext = useContextRegister();

  const BackAction = () => (
    <TopNavigationAction 
      icon={BackIcon}
      onPress={()=>{
        navigation.navigate('WELCOME')
      }}
    />
  );

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
          {/* <Input
            style={styles.input}
            // value={value}
            placeholder='Nama'
            // onChangeText={nextValue => setValue(nextValue)}
          /> */}
          <Input
            style={styles.input}
            label='Nomor Telepon'
            accessoryLeft = {iconPhone}
            value={registerContext.registerData.phone || ''}
            placeholder='Contoh: 085811733128'
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, phone: nextValue})}
          />
          {/* <Input
            style={styles.input}
            label='Kode Ajakan (Opsional)'
            value={registerContext.registerData.phone || ''}
            placeholder='Masukan Kode Ajakan'
            onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, phone: nextValue})}
          /> */}
          {/* <Input
            style={styles.input}
            // value={value}
            placeholder='Email'
            // onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            style={styles.input}
            // value={value}
            placeholder='Password'
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            // onChangeText={nextValue => setValue(nextValue)}
          /> */}
        </Layout>
        <Button
          style={{
            marginTop: 40
          }}
          onPress={() => {
            multiStepFormContext.setStep(2)
          }}
        >
          <Text style={styles.btnPrimary}>
            Lanjut
          </Text>
        </Button>
      </Layout>
    </View>
  )
}

export default StepOne;