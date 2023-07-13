// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
// import React from 'react'
// import AppBackground from '../../Components/AppBackground';
// import Colors from '../../../constant/Colors';
// import AppHeader from '../../Components/AppHeader';
// import { hp, wp } from '../../../constant/responsiveFunc';
// import fonts from '../../../constant/fonts';
// import AppInput from '../../../constant/AppInput';
// import AppButton from '../../Components/AppButton';
// import Images from '../../../constant/Images';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import AuthBottomContainer from '../AuthBottomContainer';

// const Signup = () => {
//     return (
//         <AppBackground
//             safeAreaColor={Colors.themeColor}
//         >
//             <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />
//             <KeyboardAwareScrollView>
//                 <View style={styles.titleContainer}>
//                     <Text style={styles.title}>Create Your Account</Text>
//                 </View>

//                 <AppInput
//                     label={'Your Name'}
//                     placeholder={'Enter your Name'}
//                     required
//                 />

//                 <AppInput
//                     label={'Mobile Phone Number'}
//                     placeholder={'Enter your phone number'}
//                     required
//                 />

//                 <AppInput
//                     label={'Password'}
//                     placeholder={'at least 8 characters'}
//                     required
//                     isEyeIconShow
//                     passwordError
//                 />
//                 <View style={{ marginHorizontal: '3%' }}>
//                     <Text style={styles.termsPrivacy} >
//                         By Continuing, you agree to Hanooot
//                         <TouchableOpacity onPress={() => console.log('Terms & Condition')}>
//                             <Text style={{ color: Colors.themeColor }} > Terms and Conditions </Text>
//                         </TouchableOpacity>
//                         and
//                         <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
//                             <Text style={{ color: Colors.themeColor }} > Privacy Policy </Text>
//                         </TouchableOpacity>
//                     </Text>
//                 </View>
                
//                 <AppButton
//                     label={'Continue'}
//                     containerStyle={{ marginVertical: '5%' }}
//                 />

//                 <AuthBottomContainer />

//             </KeyboardAwareScrollView>
//         </AppBackground>
//     )
// }

// export default Signup;

// const styles = StyleSheet.create({
//     title: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontSize: 22,
//         fontWeight: 600,
//         letterSpacing: 0.5,
//         textAlign: 'center'
//     },
//     titleContainer: {
//         paddingVertical: '5%',
//         // backgroundColor: 'red',
//         borderBottomColor: Colors.GRAY,
//         borderBottomWidth: 1
//     },
//     termsPrivacy: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         letterSpacing: 0.5,
//         textAlign: 'left',
//         color: Colors.GRAY3,
//         // marginHorizontal: '5%',
//         // backgroundColor: 'red'




//         //         //styleName: English/Body Text Medium;
//         // font-family: Visby CF;
//         // font-size: 14px;
//         // font-weight: 500;
//         // line-height: 19px;
//         // letter-spacing: 0.005em;
//         // text-align: left;

//     },

//     //     //styleName: English/H1 Text Semi Bold;
//     // font-family: Visby CF;
//     // font-size: 22px;
//     // font-weight: 600;
//     // line-height: 27px;
//     // letter-spacing: 0.005em;
//     // text-align: center;

//     container: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: Colors.WHITE,
//         borderWidth: 1,
//         borderRadius: 100,
//         borderColor: Colors.GRAY,
//         width: wp(30),
//         paddingVertical: '4%',
//         gap: 10
//     },
//     icon: {
//         width: 20,
//         height: 20,
//         resizeMode: 'contain'
//     },
//     text: {
//         fontFamily: fonts.VISBY_CF_REGULAR,
//         fontSize: 12,
//         fontWeight: 600,
//         letterSpacing: 0.5,
//         textAlign: 'center'

//     },
//     rowContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         marginHorizontal: '5%',
//         // width: '90%',
//         flexWrap: 'wrap',
//         textAlign: 'left'
//     }

// })


//============================================================


import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppInput from '../../../constant/AppInput';
// import HomeIcon from '../assets/svgs/home.svg';
// import HomeIcon from '../../assets/svgs/home.svg';
// import Svgs from '../../constant/Svgs';

// const {HomeIcon} = Svgs;


const Signup = () => {
  const [countryCode, setCountryCode] = useState('');

  const countryList = [
    {
      code: '+91',
      flag: require('../../../assets/images/Android.png'),
    },
    {
      code: '+1',
      flag: require('../../../assets/images/Android.png'),
    },
    {
      code: '+44',
      flag: require('../../../assets/images/Android.png'),
    },
    {
      code: '+92',
      flag: require('../../../assets/images/Android.png'),
    },
  ];

  const onSelectCountry = (code) => {
    setCountryCode(code);
  };

  return (
    <AppBackground>
    {/* <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Country Code"
        value={countryCode}
        editable={false}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCountryCode('');
        }}
      >
        <Image
          style={styles.icon}
          source={require('../../../assets/images/Android.png')}
        />


      </TouchableOpacity>
      {countryCode === '' ? (
        <ScrollView style={styles.countryList}>
          {countryList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.country}
              onPress={() => onSelectCountry(item.code)}
            >
              <Image
                style={styles.flag}
                source={item.flag}
                resizeMode="contain"
              />
              <Text style={styles.code}>{item.code}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : null}
    </View> */}

    <AppInput />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#f2f2f2',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  icon: {
    width: 20,
    height: 20,
  },
  countryList: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    maxHeight: 200,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  code: {
    fontSize: 16,
  },
});

export default Signup;