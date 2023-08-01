// import React, {useEffect} from 'react';
// import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import RootStackScreen from './src/screens/RootStackNavigator/RootStackScreen';
// import SplashScreen from 'react-native-splash-screen';
// import {Provider} from 'react-redux';
// import Store from './src/screens/Store';
// import AppToast from './src/Components/universal/Toast'

// function App(): JSX.Element {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <RootStackScreen />
//       </NavigationContainer>
//       <AppToast/>
//     </Provider>
//   );
// }

// export default App;




import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackNavigator/RootStackScreen';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Store, Persistor} from './src/screens/Store';
import AppToast from './src/Components/universal/Toast'
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from 'react-native-paper';
import Splash from './src/screens/Splash';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={<Splash/>} persistor={Persistor}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
        <AppToast />
      </PersistGate>
    </Provider>
  );
}

export default App;

