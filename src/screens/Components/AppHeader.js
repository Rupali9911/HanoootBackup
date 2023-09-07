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

const { HeartIconBlack, CartIcon, SearchIcon } = SVGS;


export default function AppHeader(props) {
  const [isSearch, setSearch] = useState(false)
  const navigation = useNavigation();

  const userData = useSelector((state) => state.userReducer.userData);


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
          {/* <Image source={props.image} style={styles.rightIcon} /> */}
        </TouchableOpacity>
      </View>
    );
  }

  const renderToastMsg = () => {
    showErrorToast('For all your shopping needs', 'Please Login First')
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
                ]}
                source={Images.backIcon}
              />
            }
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={[styles.mainTitleStyle, props.titleComponentStyle]}>
        {props.placeholderText ? (
          <View style={{ flex: 1, width: '100%', justifyContent: 'center', zIndex: 999 }}>
            <AppSearch placeholderText={props.placeholderText} onChangeText={(val) => setSearch(val)} />
          </View>
        ) :
          props.Image ?
            <Image source={Images.HanoootLogo} style={{
              width: 90,
              height: 60,
              resizeMode: 'contain'
            }} />
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
              // onPress={props.onLikePress}
              onPress={() => userData ? navigation.navigate('WishlistScreen') : renderToastMsg()}
            // image={Images.Wishlist}

            >
              <HeartIconBlack width={SIZE(20)} height={SIZE(20)} />
            </RightSideIcon>

          }

          {
            props.showSearchIcon &&
            <RightSideIcon
              onPress={props.onSearchPress}
            // image={Images.searchIcon}
            >
              <SearchIcon width={SIZE(20)} height={SIZE(20)} />
            </RightSideIcon>
          }

          {
            props.showCartIcon &&
            <RightSideIcon
              onPress={() => userData ? navigation.navigate('CartScreen', { screen: true }) : renderToastMsg()}
            // image={Images.cart}
            >
              <CartIcon width={SIZE(20)} height={SIZE(20)} />
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
            >{'Cancel'}</Text>
          </TouchableOpacity>
        )}
      </View>






      {/* 
      {props.Search &&
        <View style={{ width: props.showBackButton && !isSearch ? wp(90) : wp(100) }}>
          <AppSearch placeholderText={props.placeholderText} onChangeText={(val) => setSearch(val)} />
        </View>
      }

      {
        props.title &&
        <View style={[styles.titleContainer, props.titleContainerStyle   ,{ justifyContent: props.showRightComponent ? 'space-between' : 'center', width: props.showBackButton && props.showRightComponent ? wp(90) : wp(100), }]}>
          <Text style={[styles.title, props.titleStyle]} numberOfLines={1}>{props.title}</Text>
          {props.showRightComponent &&
            <TouchableOpacity
              onPress={props.onPressRight}
              style={{marginRight: '5%'}}
              >
                
              {
                props.isWishlist ?
                  <Image
                    style={[
                      styles.likeIcon,
                    ]}
                    source={Images.Wishlist}
                  />
                  :
                  <Text
                    style={[styles.title, { color: Colors.themeColor }]}
                  >Cancel</Text>
              }
            </TouchableOpacity>
          }
        </View>
      } */}




    </View>



  )
}

const styles = StyleSheet.create({

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
    fontFamily: fonts.VisbyCF_Bold,
    fontSize: 18,
    letterSpacing: 0.5,
    lineHeight: 21,
    fontWeight: 700,
    color: Colors.BLACK,
    paddingHorizontal: '2%'
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'

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