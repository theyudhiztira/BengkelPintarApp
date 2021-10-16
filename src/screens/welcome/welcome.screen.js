import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import imageBg from '../../assets/welcome-screen-bg.jpg'
import imageLogo from '../../assets/welcome-logo.png'
import style from './welcome.style'
import LinearGradient from 'react-native-linear-gradient'
import * as eva from '@eva-design/eva'

const Welcome = ({ navigation }) => {
  return (
    <Layout style={style.screenView}>
      <ImageBackground source={imageBg} resizeMode="cover" style={style.screenBackground}>
        <LinearGradient colors={['transparent', 'black']} style={{
          flex: 1
        }}>
          <View style={style.welcomeLogoContainer}>
            <Image source={imageLogo} resizeMode="contain" style={style.welcomeLogo} />
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              marginBottom: 50,
              paddingHorizontal: 15
            }}
          >
            <Button onPress={() => {
              navigation.navigate('LOGIN')
            }}>
              <Text>Masuk</Text>
            </Button>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 11
              }}
            >
              Belum memiliki akun?
            </Text>
            <Button onPress={() => {
              navigation.navigate('REGISTER')
            }}
            style={{
              backgroundColor: 'transparent'
            }}>
              <Text>Daftarkan Bengkel</Text>
            </Button>
            <Text style={{
              marginTop: 10,
              fontSize: 11,
              textAlign: 'center'
            }}>Dengan masuk atau mendaftar, kamu sudah menyetujui <Text style={{
              fontSize: 11,
              color: eva.dark['color-primary-500']
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