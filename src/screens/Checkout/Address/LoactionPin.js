// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MapView from 'react-native-maps';

// const LoactionPin = () => {
//   return (
//     <MapView
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
// />
//   )
// }

// export default LoactionPin

// const styles = StyleSheet.create({})

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import AppButton from '../../Components/AppButton';

const LoactionPin = () => {
  return (
    // <AppBackground>
    //   <AppHeader showBackButton heading={'Pin Your Location'} />
    //   <View style={styles.MainContainer}>

    //     <MapView
    //       style={styles.mapStyle}
    //       showsUserLocation={false}
    //       zoomEnabled={true}
    //       zoomControlEnabled={true}
    //       initialRegion={{  
    //         latitude: 28.579660,   
    //         longitude: 77.321110,  
    //         latitudeDelta: 0.0922,  
    //         longitudeDelta: 0.0421,  
    //       }}>

    //       <Marker
    //         coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
    //         title={"JavaTpoint"}
    //         description={"Java Training Institute"}
    //       />
    //     </MapView>

    //   </View>
    // </AppBackground>


    // <View style={styles.container}>
    <AppBackground>
      {/* <AppHeader showBackButton

        title={'Pin Your Location'}
      /> */}
      {/* <View style={styles.header}>
        <Text>Header</Text>
      </View> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* <View style={styles.bottomButtonContainer}>
        <AppButton label={'Confirm Location'}
        />
      </View> */}
    </AppBackground>
    //  </View> 

  );
}


export default LoactionPin;

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
  mapStyle: {
    // position: 'absolute',
    // zIndex: -1,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1,
    zIndex: -1
  },


  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: -1
  },
  header: {
    position: 'absolute',
    top: 100,
    // left: 0,
    // right: 0,
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: '2%'
  },
});  