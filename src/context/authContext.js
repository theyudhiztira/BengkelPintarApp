import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  AsyncStorage.getItem("bp_token").then(data => {
    if(data !== null) return setIsLoggedIn(true)
  })

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

