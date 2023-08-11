import { Button, Image, StyleSheet, Text, View, PermissionsAndroid, Platform, Linking, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../screens/Components/AppHeader'
import AppBackground from '../../screens/Components/AppBackground'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { hp, wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';
import AppButton from '../../screens/Components/AppButton';
import AppPermission from '../universal/Permission';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding'
import { useNavigation } from '@react-navigation/native';


import {
  openSettings,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';

const Location = (props) => {
  const updateRegion = props?.route?.params?.updateAddress;
  const [address, setAddress] = useState(updateRegion ? updateRegion?.address : '')
  const [getInitialState, setGetInitialState] = useState({
    region: {
      latitude: updateRegion ? Number(updateRegion?.latitude) : 22.7196,
      longitude: updateRegion ? Number(updateRegion?.longitude) : 75.1577,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  })
  const navigation = useNavigation();
  Geocoder.init('AIzaSyBrzXVff2NFocJdPwtn3fLyTR8vLkZpJQE');

  useEffect(() => {
    // chechPermisssion()
    !updateRegion && getLocation();
  }, [])


  const chechPermisssion = async () => {
    const status = await requestMultiple([
      PERMISSIONS.IOS.LOCATION_ALWAYS,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    ])
    console.log('checked status : ', status)

    if (status[PERMISSIONS.IOS.LOCATION_ALWAYS] === RESULTS.GRANTED || status[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED) {
      return true;
    }
    else {
      Alert.alert(
        `Turn on Location Services to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSettings },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }
  }

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
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };


  const goBack = () => {
    const data = {
      latitude: getInitialState?.region?.latitude?.toString(),
      longitude: getInitialState?.region?.longitude?.toString(),
      address: address
    }
    navigation.goBack();
    props?.route?.params?.onGoBack(data);
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

  const getAddressFromCoordinates = (lat, long) => {
    Geocoder.from(lat, long)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];

        // console.log(addressComponent);
        console.log('Complete response from Geocoder', json?.results[0]?.formatted_address);
        setAddress(json?.results[0]?.formatted_address)
      })
      .catch(error =>
        console.warn(error)
      );
  }

  const getLocation = async () => {
    console.log('getLocation called')
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        // setLocation(position);
        console.log(position);

        setGetInitialState({ region: { latitude: position?.coords.latitude, longitude: position?.coords.longitude } })
        getAddressFromCoordinates(position?.coords.latitude, position?.coords.longitude)
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
        forceLocationManager: useLocationManager,
        showLocationDialog: true,
      },
    );
  };


  const OverlayComponent = () => {
    return (
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image source={Images.LocationIcon} style={{ height: hp(2.46), width: wp(4), resizeMode: 'contain', tintColor: Colors.themeColor }} />
          <Text numberOfLines={2}>{address}</Text>
        </View>
        <AppButton label={'Confirm Location'} 


        onPress={goBack}
        
        
        />
      </View>
    );
  }

  const onRegionChange = (region) => {
    // this.setState({ region });
    // console.log('onRegionChange : ', region)
    // setGetInitialState({ region: region })
  }


  const onRegionChangeComplete = (region, details) => {
    //  console.log('onRegionChangeComplete : ', region, details)
  }

  // console.log('get : ', getInitialState)

  const onMapPress = (event) => {
    setGetInitialState({ region: { latitude: event?.nativeEvent.coordinate.latitude, longitude: event?.nativeEvent.coordinate.longitude } })
    getAddressFromCoordinates(event?.nativeEvent.coordinate.latitude, event?.nativeEvent.coordinate.longitude)
  }

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={'Pin Your Location'}
      />
      <View style={styles.screenContainer}>
        <MapView
          style={styles.mapStyle}
          // provider={PROVIDER_GOOGLE}
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
          // showsUserLocation
          // showsMyLocationButton
          // userLocationCalloutEnabled
          // showsCompass={true}
          // showsTraffic={true}
          // toolbarEnabled={true}
          userLocationPriority={'high'}
          zoomControlEnabled={true}
          mapType={'standard'}
          onPress={e => onMapPress(e)}
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
      {/* <View>
        <Text>
          Latitude: {getInitialState.region.latitude}{' '}
          Longitude: {getInitialState.region.longitude}
        </Text>
      </View> */}

      {/* <Button title="Get Location" onPress={getLocation} /> */}

      <OverlayComponent />
    </AppBackground>
  )
}

// Location.getData = 'getData form child component';


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








