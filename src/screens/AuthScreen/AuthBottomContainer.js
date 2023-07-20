import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { wp, hp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'
import { useNavigation } from '@react-navigation/native';
import { googleSignIn, appleSignIn } from '../../services/socialAuth'

const AuthBottomContainer = (props) => {
    const navigation = useNavigation();

    const SocialIconSection = (props) => {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Image
                    style={styles.icon}
                    source={props.Image}
                />
                <Text style={styles.text}>{props.Text}</Text>
            </TouchableOpacity>
        )
    }


    onPressGoggle = async () => {
        console.log('Goggle Sigin Tapped')
        googleSignIn()
            .then(response => {
                console.log('response from googleSignIn', response)
                navigation.navigate('Home')
            })
            .catch(error => {
                console.log('Error from googleSignIn', error)
            })

    }

    onPressFacebook = () => {
        console.log('Facebook Sigin Tapped')
    }

    onPressApple = () => {
        console.log('Apple Sigin Tapped')
        appleSignIn()
            .then(response => {
                console.log('response from appleSignIn', response)
                navigation.navigate('Home')
            })
            .catch(error => {
                console.log('Error from appleSignIn', error)
            })
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.separator} />
                <Text style={styles.titleText}>Or Sign Up with</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.SocialIconContainer}>
                <SocialIconSection
                    onPress={onPressGoggle}
                    Image={Images.GoogleIcon}
                    Text={'Google'}
                />
                <SocialIconSection
                    onPress={onPressFacebook}
                    Image={Images.FacebookIcon}
                    Text={'Facebook'} />
                <SocialIconSection
                    onPress={onPressApple}
                    Image={Images.AppleIcon}
                    Text={'Apple'}
                />
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.termsPrivacy}>Already have an account?</Text>
                <TouchableOpacity onPress={this.onSignInPress}>
                    <Text style={[styles.termsPrivacy, { color: Colors.themeColor }]}> Sign in</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default AuthBottomContainer;

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    titleContainer: {
        paddingVertical: '5%',
        // backgroundColor: 'red',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1
    },
    termsPrivacy: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAY3,
        // marginHorizontal: '5%',
        // backgroundColor: 'red'




        //         //styleName: English/Body Text Medium;
        // font-family: Visby CF;
        // font-size: 14px;
        // font-weight: 500;
        // line-height: 19px;
        // letter-spacing: 0.005em;
        // text-align: left;

    },

    //     //styleName: English/H1 Text Semi Bold;
    // font-family: Visby CF;
    // font-size: 22px;
    // font-weight: 600;
    // line-height: 27px;
    // letter-spacing: 0.005em;
    // text-align: center;

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: Colors.GRAY,
        width: wp(30),
        paddingVertical: '4%',
        gap: 10
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    text: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'

    },
    titleText: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: 0.5,
        marginHorizontal: '1%'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        // marginVertical: '5%'
    },
    separator: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1,
        width: '35%'
    },
    SocialIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: '5%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    }
})


// import React, { useState } from 'react';
// import {
//   TextInput,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Text,
// } from 'react-native';
// // import HomeIcon from '../assets/svgs/home.svg';
// // import HomeIcon from '../../assets/svgs/home.svg';
// import Svgs from '../../constant/Svgs';

// const {HomeIcon} = Svgs;


// const AuthBottomContainer = () => {
//   const [countryCode, setCountryCode] = useState('');

//   const countryList = [
//     {
//       code: '+91',
//       flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
//     },
//     {
//       code: '+1',
//       flag: require('../../assets/images/Android.png'),
//     },
//     {
//       code: '+44',
//       flag: require('../../assets/images/Android.png'),
//     },
//     {
//       code: '+92',
//       flag: require('../../assets/images/Android.png'),
//     },
//   ];

//   const onSelectCountry = (code) => {
//     setCountryCode(code);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Country Code"
//         value={countryCode}
//         editable={false}
//       />
//       <TouchableOpacity
//         style={styles.iconContainer}
//         onPress={() => {
//           setCountryCode('');
//         }}
//       >
//         {/* <Image
//           style={styles.icon}
//           source={require('../../assets/images/Android.png')}
//         /> */}

// <HomeIcon width={200} height={200} />

//       </TouchableOpacity>
//       {countryCode === '' ? (
//         <ScrollView style={styles.countryList}>
//           {countryList.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.country}
//               onPress={() => onSelectCountry(item.code)}
//             >
//               <Image
//                 style={styles.flag}
//                 source={item.flag}
//                 resizeMode="contain"
//               />
//               <Text style={styles.code}>{item.code}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   input: {
//     flex: 1,
//     padding: 0,
//     margin: 0,
//     borderRadius: 5,
//     paddingLeft: 10,
//     fontSize: 16,
//     backgroundColor: '#f2f2f2',
//   },
//   iconContainer: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#f2f2f2',
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   countryList: {
//     position: 'absolute',
//     top: 40,
//     left: 0,
//     right: 0,
//     backgroundColor: '#f2f2f2',
//     maxHeight: 200,
//   },
//   country: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },
//   flag: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   code: {
//     fontSize: 16,
//   },
// });

// export default AuthBottomContainer;