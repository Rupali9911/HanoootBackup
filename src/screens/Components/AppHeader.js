import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React from 'react';
import Images from '../../constant/Images';
import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Icon from 'react-native-vector-icons/MaterialIcons';



export default function AppHeader(props) {
  return (
    <>
    <View style={[styles.container, props.containerStyle]}>
      {/* <View style={{ flex: 1 }}> */}
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
      {/* </View> */}

      <View style={styles.searchSection}>
        {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" /> */}
        {/* <Image source={Images.searchIcon} style={styles.searchIcon}/> */}
        <TextInput
          style={styles.input}
          placeholder="What are you loooking for ?"
          placeholderTextColor={'#B7B7B7'}
          // onChangeText={(searchString) => { this.setState({ searchString }) }}
          underlineColorAndroid="transparent"
        />
      </View>

    </View>
          <View style={{ ...styles.separator, width: '100%' }} />
          </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    paddingHorizontal: '2%'
  },
  // title: {
  //     fontSize: RF(2.3),
  //     fontFamily: FONTS.ARIAL,
  //     textAlign: 'center',
  //     color: COLORS.BLACK1,
  //     maxWidth: wp('80%'),
  // },
  backContainer: {
    height: '100%',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    // width: '15%',
    // backgroundColor: 'red'
  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    backgroundColor: '#E7E5E5',
    // color: 'red',
    height: 50,
    borderRadius: 10
  },
  separator: {
    backgroundColor: '#E7E5E5',
    height: 1,
    alignSelf: 'flex-end',
  }
  
})