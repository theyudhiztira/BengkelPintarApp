import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './stacks/root.stack';
import { AuthContextProvider } from './context/authContext';

export default () => {

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={eva.dark}>
          <AuthContextProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </AuthContextProvider>
        </ApplicationProvider>
    </>
  )
};