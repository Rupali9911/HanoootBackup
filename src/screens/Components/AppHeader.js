import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import Images from '../../constant/Images';
import AppSearch from '../Components/AppSearch';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../constant/fonts';
import { SIZE, hp, wp } from '../../constant/responsiveFunc';
import SVGS from '../../constant/Svgs';
import { useSelector } from 'react-redux';
import { showErrorToast } from '../../Components/universal/Toast';
import { translate } from '../../utility';
import AppModal from '../../Components/universal/Modal';
import ModalContentWithoutLogin from '../../Components/universal/Modal/ModalContentWithoutLogin';
import { getFonts } from '../utils';

const { HeartIconBlack, CartBlackIcon, SearchIcon, HanoootLogo } = SVGS;


export default function AppHeader(props) {
  const [isSearch, setSearch] = useState(false)

  const navigation = useNavigation();

  const userData = useSelector((state) => state.userReducer.userData);
  const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

  const RightSideIcon = (props) => {
    return (
      <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
        <TouchableOpacity
          style={[
            styles.backContainer,
            // { alignItems: 'flex-end', paddingLeft: 0, paddingRight: wp('3%') },
          ]}
          onPress={props.onPress}>
          {props.children}
        </TouchableOpacity>
      </View>
    );
  }

  return (

    <View style={[styles.container, props.mainContainerStyle]}>
      <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
        {props.showBackButton ? (
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() =>
              props.onPressBack ? props.onPressBack : navigation.goBack()
            }
          >
            {
              <Image
                style={[
                  styles.backIcon,
                  { transform: [{ rotate: selectedLanguageItem?.language_id === 0 ? '0deg' : '180deg' }] }]}
                source={Images.backIcon}
              />
            }
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={[styles.mainTitleStyle, props.titleComponentStyle]}>
        {props.placeholderText ? (
          <View style={{ flex: 1, width: '100%', justifyContent: 'center', zIndex: 999 }}>
            <AppSearch placeholderText={props.placeholderText} onChangeText={(val) => setSearch(val)} onCrossPress={props.onCrossPress} />
          </View>
        ) :
          props.Logo ?
            <HanoootLogo />
            :
            (
              <Text
                numberOfLines={1}
                style={[
                  styles.title,
                  {
                    // paddingLeft: 10,
                    // left: props.showBackButton ? -10 : 10
                  },
                  props.titleStyle,
                ]}>
                {props.title}
              </Text>
            )}
      </View>

      <View style={{ alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
        <View style={{ flexDirection: 'row' }}>
          {
            props.showLikeIcon &&
            <RightSideIcon
              onPress={props.onWishlistPress}

            >
              <HeartIconBlack width={SIZE(20)} height={SIZE(20)} />
            </RightSideIcon>
          }

          {
            props.showSearchIcon &&
            <RightSideIcon
              onPress={props.onSearchPress}
            >
              <SearchIcon width={SIZE(20)} height={SIZE(20)} />
            </RightSideIcon>
          }

          {
            props.showCartIcon &&
            <RightSideIcon
              onPress={props.onCartPress}
            >
              <CartBlackIcon width={SIZE(20)} height={SIZE(20)} />
            </RightSideIcon>
          }
        </View>

        {props.showRightComponent && (
          <TouchableOpacity
            onPress={() => props.onCancelPress ? props.onCancelPress : navigation.goBack()}
          >
            <Text
              style={[styles.title, { color: Colors.themeColor, paddingRight: 10 }]}
              onPressRightText
            >{translate('common.cancel')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View >



  )
}

const styles = StyleSheet.create({

  // container: isSearch => ({
  //   // zIndex: 999,
  //   height: isSearch ? hp('50%') : hp('8%'),
  //   // height: hp('8%'),
  //   width: wp(100),
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   // backgroundColor: Colors.WHITE,
  //   borderBottomColor: Colors.GRAY,
  //   borderBottomWidth: 1,
  //   justifyContent: 'center',
  //   marginTop: isSearch ? '10%' : 0
  //   // flex: 1,
  //   // justifyContent: 'center'
  //   // flex: 2
  // }),
  container: {
    zIndex: 999,
    height: hp('8%'),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  // line1: type => ({
  //   width: 20,
  //   height: 1,
  //   backgroundColor: type === 'ADDRESS' ? Colors.GRAY : Colors.themeColor
  // }),
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    // backgroundColor: 'green',
    // zIndex: -1
    // paddingHorizontal: '2%'
  },

  backContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('10%'),
    height: '100%',

    // zIndex: 1,
    // backgroundColor: 'green'

  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: getFonts.BOLD,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 21,
    // fontWeight: 700,
    color: Colors.BLACK,
    paddingHorizontal: '2%'
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'


    //styleName: English/Body Text Bold;
    // font-family: Visby CF;
    // font-size: 16px;
    // font-weight: 700;
    // line-height: 21px;
    // letter-spacing: 0.005em;
    // text-align: left;


  },
  rightIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.BLACK
  },
  mainTitleStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
    // width: '100%',
  }
})