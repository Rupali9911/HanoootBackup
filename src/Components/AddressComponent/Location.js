import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../screens/Components/AppHeader'
import AppBackground from '../../screens/Components/AppBackground'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { hp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';
import AppButton from '../../screens/Components/AppButton';
import AppPermission from '../universal/Permission';

const Location = () => {
  const [getInitialState, setGetInitialState] = useState({
    region: {
      latitude: 22.7196,
      longitude: 75.8577,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  })


  // useEffect( ()=>{


  //  navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log('Position -> ',position);
  //     },
  //     (error) => console.log(error)
  //     // {enableHighAccuracy: false, timeout: 50000}
  // );
  // })
  const OverlayComponent = () => {
    return (
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={Images.LocationIcon} style={{ height: 20, width: 15, resizeMode: 'contain', tintColor: Colors.themeColor }} />
          <Text>10034, Sulaymaniyah Governorate, babli</Text>
        </View>
        <AppButton label={'Confirm Location'} />
      </View>
    );
  }

  const onRegionChange = (region) => {
    // this.setState({ region });
    console.log('onRegionChange : ', region)
    setGetInitialState({ region: region })
  }


  const onRegionChangeComplete = (region,details ) => {
console.log('onRegionChangeComplete : ', region,details )
  }

  console.log('get : ', getInitialState)

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={'Pin Your Location'}
      />
      <View style={styles.screenContainer}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          // initialRegion={{
          //   latitude: 37.78825,
          //   longitude: -122.4324,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
          region={getInitialState.region}
          onRegionChange={onRegionChange}
          onRegionChangeComplete={(region, details) => onRegionChangeComplete(region, details)}
          zoomEnabled={true}
          showsUserLocation
          showsMyLocationButton
          userLocationCalloutEnabled
          showsCompass={true}
          showsTraffic={true}
          toolbarEnabled={true}
          userLocationPriority={'high'}
          zoomControlEnabled={true}
          mapType={'standard'}
          // scrollEnabled={false}
        >
          <Marker
            coordinate={{
              latitude: getInitialState.region.latitude,
              longitude: getInitialState.region.longitude,
            }}
            title="My Marker"
            description="Some description"
          />

        </MapView>
      </View>
      <View>
        <Text>
          Latitude: {getInitialState.region.latitude}{' '}
          Longitude: {getInitialState.region.longitude}
        </Text>
      </View>

      {/* <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // style={{flex: 1 }}
          region={getInitialState.region}
          onRegionChange={region => onRegionChange(region)}
        >
          <MapView.Marker
            coordinate={{
              latitude: getInitialState.region.latitude,
              longitude: getInitialState.region.longitude,
            }}
            title="My Marker"
            description="Some description"
          />
        </MapView>
        <View>
          <Text>
            Latitude: {getInitialState.region.latitude}{' '}
            Longitude: {getInitialState.region.longitude}
          </Text>
        </View>
      </View> */}

      <OverlayComponent />
    </AppBackground>
  )
}

export default Location

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomView: {
    height: hp('15%'),
    backgroundColor: Colors.WHITE,
    padding: '5%',
    alignItems: 'center'
  },
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  mapStyle: {
  ...StyleSheet.absoluteFillObject
  },
})