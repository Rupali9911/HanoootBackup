import React, {useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackNavigator/RootStackScreen';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Store from './src/screens/Store';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
