import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Colors from '../../constant/Colors';
// import Colors from '../constants/Colors';
// import FetchingIndicator from './fetchingIndicator';

const AppBackground = props => {
  return (
    <>
      {props.hideSafeArea ? null : (
        <SafeAreaView
          style={[
            styles.safeArea,
            props.safeAreaColor && {backgroundColor: props.safeAreaColor},
          ]}
        />
      )}
      <View style={[styles.backgroundContainer, props.containerStyle]}>
        <StatusBar
          hidden={false}
          barStyle={props.lightStatus ? 'light-content' : 'dark-content'}
        />
        {/* {props.isBusy && <FetchingIndicator />} */}
        {props.children}
      </View>
      {props.hideBottomSafeArea ? null : (
        <SafeAreaView
          style={[
            styles.safeArea,
            props.safeAreaColor && {backgroundColor: props.safeAreaColor},
          ]}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.LightGray,
  },
  safeArea: {
    backgroundColor: 'white',
  },
});

AppBackground.propTypes = {
  isBusy: PropTypes.bool,
};

export default AppBackground;
