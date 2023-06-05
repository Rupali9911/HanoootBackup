import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React from 'react';
import Images from '../../constant/Images';
import AppSearch from '../Components/AppSearch';
import Colors from '../../constant/Colors';



export default function AppHeader(props) {
  return (
    <>
      <View style={[styles.container, props.containerStyle]}>
        {props.showBackButton ? (
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() =>
              // props.onPressBack ? props.onPressBack() : navigation.goBack()
              Alert.alert('Pressed!')
            }>
            {
              <Image
                style={[
                  styles.backIcon,
                  //   {tintColor: props.isWhite ? Colors.white : Colors.black},
                ]}
                source={Images.backIcon}
              />
            }
          </TouchableOpacity>
        ) : null}
        <AppSearch placeholderText={props.placeholderText} />
      </View>
      <View style={styles.separator} />
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: '1%',
    width: '100%',
    padding: 20,
    backgroundColor: Colors.WHITE
    // marginHorizontal: 10,
    // padding: 22,
    // backgroundColor: 'red',
  },
  backContainer: {

    // margin: 10
    // padding: 10
    // marginHorizontal: 5
    // height: '100%',
    // paddingHorizontal: 10,
    // justifyContent: 'center',
    // width: '10%'
    // backgroundColor: 'green'
    // width: '15%',
    // backgroundColor: 'red'
    // padding: 5

    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 10,
    // backgroundColor: Colors.GRAYRGBA(0.3),
    // paddingLeft: 15,
    // marginHorizontal: 10
  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  separator: {
    backgroundColor: Colors.GRAY,
    height: 1,
    alignSelf: 'flex-end',
    width: '100%'
    // width: '100%'
  }
})