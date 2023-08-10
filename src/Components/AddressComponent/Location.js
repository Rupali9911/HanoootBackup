import { Button, Image, StyleSheet, Text, View,PermissionsAndroid, Platform, Linking,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../screens/Components/AppHeader'
import AppBackground from '../../screens/Components/AppBackground'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { hp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';
import AppButton from '../../screens/Components/AppButton';
import AppPermission from '../universal/Permission';
import Geolocation from 'react-native-geolocation-service';
import {
  openSettings,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';




const Location = () => {
  
  const chechPermisssion = async() => {
    const status = await requestMultiple([
      PERMISSIONS.IOS.LOCATION_ALWAYS,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    ])
    console.log('checked status : ', status)

    if (status[PERMISSIONS.IOS.LOCATION_ALWAYS] === RESULTS.GRANTED || status[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED) {
      return true;
    }
    else{
      Alert.alert(
        `Turn on Location Services to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSettings },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }
  }

  useEffect(() => {
    chechPermisssion()
  }, [])

  const [getInitialState, setGetInitialState] = useState({
    region: {
      latitude: 22.7196,
      longitude: 75.1577,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  })

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    // if (status === 'denied') {
    //   Alert.alert('Location permission denied');
    // }

    if (status === 'disabled' || status === 'denied') {
      Alert.alert(
        `Turn on Location Services to allow  to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }

    return false;
  };


  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      console.log(hasPermission)
      return hasPermission;
    }

    // if (Platform.OS === 'android' && Platform.Version < 23) {
    //   return true;
    // }

    // const hasPermission = await PermissionsAndroid.check(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    // );

    // if (hasPermission) {
    //   return true;
    // }

    // const status = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    // );

    // if (status === PermissionsAndroid.RESULTS.GRANTED) {
    //   return true;
    // }

    // if (status === PermissionsAndroid.RESULTS.DENIED) {
    //   ToastAndroid.show(
    //     'Location permission denied by user.',
    //     ToastAndroid.LONG,
    //   );
    // } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    //   ToastAndroid.show(
    //     'Location permission revoked by user.',
    //     ToastAndroid.LONG,
    //   );
    // }

    return false;
  };



  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        // setLocation(position);
        console.log(position);
        // setGetInitialState({})
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        // setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        // forceLocationManager: useLocationManager,
        showLocationDialog: true,
      },
    );
  };


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
    // console.log('onRegionChange : ', region)
    setGetInitialState({ region: region })
  }


  const onRegionChangeComplete = (region, details) => {
    console.log('onRegionChangeComplete : ', region, details)
  }

  // console.log('get : ', getInitialState)

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

      <Button title="Get Location" onPress={getLocation} />

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