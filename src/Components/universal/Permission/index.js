import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';




const AppPermission = () => {

    // useEffect(() => {
    //     checkpermission();
    // }, [])

    // const checkpermission = () => {
    //     check(PERMISSIONS.IOS.LOCATION_ALWAYS)
    //         .then((result) => {
    //             switch (result) {
    //                 case RESULTS.UNAVAILABLE:
    //                     console.log('This feature is not available (on this device / in this context)');
    //                     break;
    //                 case RESULTS.DENIED:
    //                     console.log('The permission has not been requested / is denied but requestable');
    //                     break;
    //                 case RESULTS.LIMITED:
    //                     console.log('The permission is limited: some actions are possible');
    //                     break;
    //                 case RESULTS.GRANTED:
    //                     console.log('The permission is granted');
    //                     break;
    //                 case RESULTS.BLOCKED:
    //                     console.log('The permission is denied and not requestable anymore');
    //                     break;
    //             }
    //         })
    //         .catch((error) => {
    //             // …
    //             console.log('here is an error : ', error)
    //         });
    // }



    return (
        <Text>Permission Page Enabled</Text>
    );
}

export default AppPermission;

const styles = StyleSheet.create({})