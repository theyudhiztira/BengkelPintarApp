import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  return (<View style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register Screen</Text>
      </Layout>
  </View>)
}

export default HomeScreen