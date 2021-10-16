import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, ImageBackground, StyleSheet, SafeAreaView, Touchable, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../../context/authContext'
import imageBg from '../../assets/welcome-screen-bg.jpg'
import imageLogo from '../../assets/welcome-logo.png'
import style from './welcome.style'
import LinearGradient from 'react-native-linear-gradient'
import * as eva from '@eva-design/eva'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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

const Welcome = ({ navigation }) => {
  const authContext = React.useContext(AuthContext)
  
  return (
    <Layout style={style.screenView}>
      <ImageBackground source={imageBg} resizeMode="cover" style={style.screenBackground}>
        <LinearGradient 
          colors={['transparent', '#121212']}
          locations={[0,0.73]}
          style={{
            flex: 1
          }}
        >
          <View style={style.welcomeLogoContainer}>
            <Image source={imageLogo} resizeMode="contain" style={style.welcomeLogo} />
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              marginBottom: 50,
              paddingHorizontal: 16,
            }}
          >
            <Button 
              style={{marginBottom: 15}}
              onPress={() => {
                navigation.navigate('LOGIN')
              }}
            >
              <Text style={styles.btnPrimary}>
                Masuk
              </Text>
            </Button>
            <Button 
              onPress={() => {
                navigation.navigate('REGISTER')
              }}
              style={{
                backgroundColor: 'transparent'
              }}
              appearance='outline'
            >
              <Text style={styles.btnOutlinePrimary}>
                Daftarkan Bengkel
              </Text>
            </Button>
            <Text style={{
              marginTop: 10,
              fontSize: 11,
              textAlign: 'left',
              opacity: .8,
            }}>Dengan masuk atau mendaftar, kamu sudah menyetujui <Text style={{
              fontSize: 11,
              color: eva.dark['color-primary-500'],
              opacity: 1
            }}>Ketentuan Layanan</Text> dan <Text style={{
              fontSize: 11,
              color: eva.dark['color-primary-500']
            }}>Kebijakan Privasi</Text> kami.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Layout>
  )
}

export default Welcome