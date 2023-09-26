import { Image, View, StyleSheet } from 'react-native';
import style from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageArray } from '../../utility/index';
import { setAppLanguage, getAllLanguages } from '../Store/reducers/languageReducer';
import { regionLanguage } from '../../utility/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../constant/Images';

const splashSource = require('../../assets/images/splash.png')

const Splash = () => {
  const dispatch = useDispatch();
  const { selectedLanguageItem } = useSelector((state) => state.languageReducer)

  useEffect(() => {
    loadAllData();
  }, []);


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