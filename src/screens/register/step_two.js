import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Button, Input, Icon, TopNavigationAction, TopNavigation } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useContextMultipleForm } from '../../context/formContext';

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
  btnOutlinePrimary: {
    color: eva.dark['color-primary-500'],
    fontSize: 18,
    fontFamily: 'WorkSans-Reguler'
  }
});

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const StepTwo = () => {
  const multiStepFormContext = useContextMultipleForm();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon}
      onPress={() => {
        multiStepFormContext.setStep(1)
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
            // value={value}
            placeholder='Nama'
            // onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
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
          />
        </Layout>
        <Button
          style={{
            marginTop: 40
          }}
          onPress={() => {
            navigation.navigate('LOGIN')
          }}
        >
          <Text style={styles.btnPrimary}>
            Daftar
          </Text>
        </Button>
      </Layout>
    </View>
  )
}

export default StepTwo;