import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import Images from '../../constant/Images';
import AppSearch from '../Components/AppSearch';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';


export default function AppHeader(props) {
  const [isSearch, setSearch] = useState(false)
  const navigation = useNavigation();

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
          <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
            <AppSearch placeholderText={props.placeholderText} onChangeText={(val) => setSearch(val)} />
          </View>
        ) :
          props.Image ?
            <Image source={Images.HanoootLogo} style={{
              width: 90,
              height: 60,
              resizeMode: 'contain'
            }}/>
            :
            (
              <Text
                numberOfLines={1}
                style={[
                  styles.title,
                  {
                    // paddingLeft: 10,
                    left: props.showBackButton ? -10 : 10
                  },
                  props.titleStyle,
                ]}>
                {props.title}
              </Text>
            )}
      </View>






      <View style={{ alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
        {props.showRightIcon ? (
          <TouchableOpacity
            style={[
              styles.backContainer,
              { alignItems: 'flex-end', paddingLeft: 0, paddingRight: wp('3%') },
            ]}
            onPress={props.onPressRight}>
            {props.rightIcon}
          </TouchableOpacity>
        ) : props.showRightComponent ? (
          <Text
            style={[styles.title, { color: Colors.themeColor, paddingRight: 10 }]}
            onPressRightText
          >{'Cancel'}</Text>
        ) : null}
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
    height: hp('8%'),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1
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
    // zIndex: 1,
    // backgroundColor: 'red'

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
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'

  },
  likeIcon: {
    height: 22,
    width: 24,
    resizeMode: 'contain',
    tintColor: Colors.BLACK
  },
  mainTitleStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',

  }
})