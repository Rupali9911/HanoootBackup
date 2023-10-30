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




import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackNavigator/RootStackScreen';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { Store, Persistor } from './src/screens/Store';
import AppToast from './src/Components/universal/Toast'
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from 'react-native-paper';
import Splash from './src/screens/Splash';
import { getDeepLinkProducts } from './src/screens/Store/actions/userAction';
// import { useDispatch, useSelector } from 'react-redux';
// import { AnyAction } from 'redux';


function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // const dispatch = useDispatch();


  // useEffect(() => {
  //   // Linking.getInitialURL().then((initialUrl) => {
  //   //   console.log('intitla url : ', initialUrl)
  //   // if (initialUrl) {
  //   getDeepLinkUrl();
  //   // }
  //   // Linking.openURL('https://hanooot.page.link/jTpt?share-WoGbej6m0q')
  //   // })
  // }, []);

  // const getDeepLinkUrl = async () => {
  //   await dispatch(getDeepLinkProducts('81vRIo5k0M') as unknown as AnyAction).
  //     then((res: any) => {
  //       console.log('res from getDeepLinkProducts: ', res)

  //     }).
  //     catch((err: any) => {
  //       console.log('err getDeepLinkUrl: ', err)
  //     })
  // }

  return (
    <Provider store={Store}>
      <PersistGate loading={<Splash />} persistor={Persistor}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
        <AppToast />
      </PersistGate>
    </Provider>
  );
}

export default App;

