import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/welcome/welcome.screen'
import { AuthContext } from '../context/authContext'
import { SafeAreaView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import LoginScreen from '../screens/login/login.screen'
import RegisterScreen from '../screens/register/register.screen'
import HomeScreen from '../screens/home/home.screen'

const { Navigator, Screen } = createStackNavigator()

const RootStack = () => {
  const authContext = React.useContext(AuthContext)
  
  const loggedInScreens = (<>
    <Screen name='Welcome' component={Welcome} />
    <Screen name='Login' component={LoginScreen} />
    <Screen name='Register' component={RegisterScreen} />
  </>)

  const guestScreen = (<>
    <Screen name='Home' component={HomeScreen} />
  </>)

  return (<Navigator headerMode='none'>
    {!authContext.isLoggedIn ? loggedInScreens : guestScreen}
  </Navigator>)
}

export default RootStack