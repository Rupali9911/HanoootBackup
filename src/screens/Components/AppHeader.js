import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React from 'react';
import Images from '../../constant/Images';
import AppSearch from '../Components/AppSearch';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';


export default function AppHeader(props) {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {props.showBackButton ? (
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() =>
              props.onPressBack ? props.onPressBack : navigation.goBack()
            }>
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

      {props.Search &&
        <View style={{ width: props.showBackButton ? wp(90) : wp(100) }}>
          <AppSearch placeholderText={props.placeholderText} />
        </View>
      }

      {
        props.title &&
        <View style={[styles.titleContainer, { justifyContent: props.showRightComponent ? 'space-between' : 'center', width: props.showBackButton ? wp(90) : wp(100), }]}>
          <Text style={[styles.title, props.titleStyle]} numberOfLines={1}>{props.title}</Text>
          {props.showRightComponent &&
            <TouchableOpacity
            onPress={props.onPressRight}>
            {
              props.isWishlist ?
                <Image
                  style={[
                    styles.likeIcon,
                  ]}
                  source={Images.like}
                />
                :
                <Text
                  style={[styles.title, { color: Colors.themeColor }]}
                >Cancel</Text>
            }
          </TouchableOpacity>
          }
        </View>
      }


      {/* {props.showRightIcon &&
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>

          <TouchableOpacity
            style={styles.backContainer}

            onPress={props.onPressRight}>
            {
              props.isWishlist ?
                <Image
                  style={[
                    styles.likeIcon,
                  ]}
                  source={Images.like}
                />
                :
                <Text
                  style={[styles.title, { color: Colors.themeColor }]}
                >Cancel</Text>
            }
          </TouchableOpacity>

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
    paddingHorizontal: '2%'
  },
  
  backContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('10%'),
   
  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.VisbyCF_Bold,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 21,
    fontWeight: 700,
    
  },
  likeIcon: {
    height: 22,
    width: 24,
    resizeMode: 'contain',
    tintColor: Colors.BLACK
  }
})