import { Layout, Text, Button, TopNavigation, Input } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AuthContext } from '../../context/authContext'
  
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


const WorkshopForm = () => {
  const authContext = React.useContext(AuthContext)

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <TopNavigation
        style={{backgroundColor: 'transparent'}}
        // accessoryLeft={BackAction}
      />
      <Layout style={{ flex: 1, backgroundColor: '#transparent', paddingHorizontal: 16}}>
        <Layout style={{ minHeight: 120, backgroundColor: 'transparent' }}>
          <Text style={{fontFamily: 'WorkSans-Bold'}} category='h3'>Daftarkan Bengkel</Text>
          <Text style={{fontFamily: 'Cabin', opacity: .8}}>Daftarkan bengkelmu untuk dapatkan semua aksesnya</Text>
        </Layout>
        <Layout style={{ backgroundColor: 'transparent' }}>
          <Input
            style={styles.input}
            // value={registerContext.registerData.name || ''}
            placeholder='Nama Bengkel'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, name: nextValue})}
          />
          <Input
            style={styles.input}
            // label='Nomor Telepon'
            // accessoryLeft = {iconPhone}
            // value={registerContext.registerData.phone || ''}
            placeholder='Nomor Telepon'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, phone: nextValue})}
          />
          <Input
            style={styles.input}
            // value={registerContext.registerData.email || ''}
            placeholder='Email'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          <Input
            style={styles.input}
            multiline={true}
            textStyle={{ minHeight: 100 }}
            // value={registerContext.registerData.email || ''}
            placeholder='Alamat'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          <Input
            style={styles.input}
            // value={registerContext.registerData.email || ''}
            placeholder='Profinsi'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          <Input
            style={styles.input}
            // value={registerContext.registerData.email || ''}
            placeholder='Kota'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          <Input
            style={styles.input}
            // value={registerContext.registerData.email || ''}
            placeholder='Kecamatan'
            // onChangeText={nextValue => registerContext.setRegisterData({...registerContext.registerData, email: nextValue})}
          />
          {/* <Button
            style={{
              marginTop: 40
            }}
            appearance='outline'
            // onPress={async () => await registerServices(registerContext.registerData)}
          >
            <Text style={styles.btnPrimary}>
              asdsad
            </Text>
          </Button> */}
        </Layout>
        <Layout>
          <Button
            style={{
              marginTop: 40
            }}
            appearance='outline'
            // onPress={async () => await registerServices(registerContext.registerData)}
          >
            <Text style={styles.btnPrimary}>
              Daftar
            </Text>
          </Button>
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

export default WorkshopForm