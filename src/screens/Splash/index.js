import { Image, View, StyleSheet, Linking, Alert, LogBox } from 'react-native';
import style from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageArray } from '../../utility/index';
import { setAppLanguage, getAllLanguages } from '../Store/reducers/languageReducer';
import { regionLanguage } from '../../utility/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../constant/Images';
import { getDeepLinkProducts } from '../Store/actions/userAction';


const splashSource = require('../../assets/images/splash.png')

const Splash = () => {
  const dispatch = useDispatch();
  const { selectedLanguageItem } = useSelector((state) => state.languageReducer)

  useEffect(() => {
    loadAllData();
  }, []);


  // useEffect(() => {
  // Linking.getInitialURL().then((initialUrl) => {
  //     console.log('intitla url : ', initialUrl)
  //     // Alert.alert('initialUrl', initialUrl)
  //     // if (initialUrl) {
  //     getDeepLinkUrl();
  //     // }
  //     // Linking.openURL('https://hanooot.page.link/jTpt?share-WoGbej6m0q')
  //   })
  // }, []);

  useEffect(() => {
    console.log('useeffect calleld :',)
    LogBox.ignoreAllLogs();
    // const linking = Linking.addEventListener('url', async ({ url }) => {
    //   console.log('url is here: ', url)
    //   // Alert.alert(url)

    //   // if (url && url.includes('xanaliaapp://connect')) {
    //   //   let id = url.substring(url.lastIndexOf('/') + 1);
    //   //   let wallet = await getWallet();
    //   //   if (wallet) {
    //   //     setTimeout(() => {
    //   //       navigatorRef.current?.navigate('Connect', { appId: id });
    //   //     }, 500);
    //   //   } else {
    //   //     dispatch(setRequestAppId(id));
    //   //   }
    //   // }
    // });

    // console.log('LINKING: ', linking)
    // return () => {
    //   // linking.remove();
    // };

    // Linking.addEventListener('url', ({ url }) => {
    //   console.log('this is the url: ', url);
    // });

    Linking.getInitialURL().then((url) => {

      if (url) {

        console.warn('Initial url is: ' + url);

      } else {

        console.warn('Initial url is null');

      }

    }).catch(err => console.warn('An error occurred', err));

    Linking.addEventListener('url', ({ url }) => {
      console.log('this is the url: ', url);
    });

    // Linking.getInitialURL().then(async (ev) => {
    //   console.log('EV URL IS HERE: ', ev)
    //   // if (ev) {
    //   //   this._handleOpenURL(ev);
    //   // }
    // }).catch(err => {
    //   console.warn('An error occurred', err);
    // });
  }, []);

  const _handleOpenURL = (event) => {
    console.log('event.url', event.url);
  }


  // componentDidMount() {
  //   Linking.addEventListener('url', this._handleOpenURL);
  // },
  // componentWillUnmount() {
  //   Linking.removeEventListener('url', this._handleOpenURL);
  // },
  // _handleOpenURL(event) {
  //   console.log(event.url);
  // }



  const getDeepLinkUrl = async () => {
    await dispatch(getDeepLinkProducts('81vRIo5k0M')).
      then((res) => {
        console.log('res: ', JSON.stringify(res))

      }).
      catch((err) => {
        console.log('err getDeepLinkUrl: ', err)
      })
  }

  const loadAllData = async () => {
    dispatch(getAllLanguages());
    const tempLanguage = await AsyncStorage.getItem('@language');

    console.log('selected from languageReducer', tempLanguage)
    if (tempLanguage) {
      let storedLanguage = JSON.parse(tempLanguage);
      dispatch(setAppLanguage(storedLanguage));
    } else {
      let regionalLanguage = languageArray.find(
        language => language.language_name == regionLanguage,
      );
      dispatch(setAppLanguage(regionalLanguage));
    }

    // dispatch(setAppLanguage(languageArray[1]));
    // await dispatch(getAllLanguages());
    // try {
    //   const token = await getAccessToken('ACCESS_TOKEN');
    //   const tempLanguage = await AsyncStorage.getItem('@language');
    //   if (token) {
    //     let asyncData = {};
    //     let values = await AsyncStorage.multiGet([
    //       '@USERDATA',
    //       '@BackedUp',
    //       '@apps',
    //       '@language',
    //       '@currency',
    //     ]);
    //     asyncData['userData'] = JSON.parse(values[0][1]);
    //     asyncData['BackedUp'] = values[1][1]
    //       ? JSON.parse(values[1][1])
    //       : values[1][1];
    //     asyncData['apps'] = values[2][1]
    //       ? JSON.parse(values[2][1])
    //       : values[2][1];
    //     let value = values[3][1] ? JSON.parse(values[3][1]) : values[3][1];
    //     let currency = values[4][1] ? JSON.parse(values[4][1]) : values[4][1];
    //     dispatch(loadFromAsync(asyncData));
    //     dispatch(setAppLanguage(value));
    //     dispatch(setAppCurrency(currency));
    //   } else {
    //     let regionalLanguage = languageArray.find(
    //       language => language.language_name == regionLanguage,
    //     );
    //     if (tempLanguage) {
    //       let storedLanguage = JSON.parse(tempLanguage);
    //       dispatch(setAppLanguage(storedLanguage));
    //     } else {
    //       dispatch(setAppLanguage(regionalLanguage));
    //     }
    //     dispatch(setAppCurrency(appCurrency));
    //     dispatch(loadFromAsync());
    //   }
    // } catch (error) { }
  };
  return (
    <View
      style={style.mainView}
    >
      <Image
        source={splashSource}
        style={style.img}
      />
    </View>
    // <View style={styles.indicatorContainer}>
    //   <Image source={Images.loadergif} style={styles.loaderImage} />
    // </View>
  );

}
export default Splash

const styles = StyleSheet.create({
  loaderImage: {
    alignSelf: 'center',
  },
  indicatorContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});