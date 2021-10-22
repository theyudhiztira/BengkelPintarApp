import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/welcome/welcome.screen'
import { AuthContext } from '../context/authContext'
import { SafeAreaView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import LoginScreen from '../screens/login/login.screen'
import RegisterScreen from '../screens/register/register.screen'
import StepOne from '../screens/register/step_one'
import HomeScreen from '../screens/home/home.screen'
import WorkshopForm from '../screens/workshop/workshop.form'

const { Navigator, Screen } = createStackNavigator()

const RootStack = () => {
  const authContext = React.useContext(AuthContext)
  
  const loggedInScreens = (<>
    <Screen name='WELCOME' component={Welcome} />
    <Screen name='LOGIN' component={LoginScreen} />
    <Screen name='REGISTER' component={RegisterScreen} />
    {/* <Screen name='RESITRATION_STEP_ONE' component={StepOne} /> */}
  </>)

  const guestScreen = (<>
    <Screen name='WORKSHOP_FORM' component={WorkshopForm} />
    <Screen name='HOME' component={HomeScreen} />
  </>)

  return (<Navigator headerMode='none'>
    {!authContext.isLoggedIn ? loggedInScreens : guestScreen}
  </Navigator>)
}

export default RootStack