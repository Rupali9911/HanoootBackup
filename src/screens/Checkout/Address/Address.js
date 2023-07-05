// import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal, Button } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import ProductHeader from '../../Components/Cards/ProductHeader'
// import AppHeader from '../../Components/AppHeader'
// import AppBackground from '../../Components/AppBackground'
// import Images from '../../../constant/Images'
// import Colors from '../../../constant/Colors'
// import fonts from '../../../constant/fonts'
// import AppButton from '../../Components/AppButton'
// // import RadioButtonRN from 'radio-buttons-react-native';
// import RadioButton from 'react-native-radio-button'
// import EmptyAddress from './EmptyAddress'
// import { useIsFocused } from '@react-navigation/native';
// import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
// import { hp, wp } from '../../../constant/responsiveFunc';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector, useDispatch } from 'react-redux';
// import { setAddressDetails, removeAddress } from '../../Store/actions/checkoutAction'









// const Address = (props) => {
//     const isFocused = useIsFocused();
//     const navigation = useNavigation();

//     const [modalVisible, setModalVisible] = useState(false);
//     const [checked, setChecked] = useState(0)
//     const [id, setId] = useState()
//     const [index, setIndex] = useState(0)
//     const dispatch = useDispatch()
//     const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);

//     console.log('Address details show from reducers : ', ADDRESS_DETAIL,);



//     useEffect(() => {

//         // if (ADDRESS) {
//         //     // const newData = [...Address, getData]
//         //     setAddressList((prevData) => [...prevData, ADDRESS]);
//         //     // showToast(Images.ToastSuccess, 'New Address Added Successfully')
//         //     showToast('Added')
//         // }

//         // else if (EDIT) {
//         //     const newData = AddressList.map((item, i) => {
//         //         if (i === index) {
//         //             return item
//         //             // setAddressList(item)
//         //         }
//         //         return item
//         //     })
//         //     setAddressList(newData)
//         // }
//         ADDRESS_DETAIL.length &&
//             showToast(Images.ToastSuccess, 'New Address Added Successfully!');

//     }, [isFocused])


//     const toastConfig = {
//         /*
//           Overwrite 'success' type,
//           by modifying the existing `BaseToast` component
//         */
//         success: (props) => (
//             <BaseToast
//                 {...props}
//                 style={{ borderLeftColor: 'pink' }}
//                 contentContainerStyle={{ paddingHorizontal: 15 }}
//                 text1Style={{
//                     fontSize: 15,
//                     fontWeight: '400'
//                 }}
//             />
//         ),
//         /*
//           Overwrite 'error' type,
//           by modifying the existing `ErrorToast` component
//         */
//         error: (props) => (
//             <ErrorToast
//                 {...props}
//                 text1Style={{
//                     fontSize: 17
//                 }}
//                 text2Style={{
//                     fontSize: 15
//                 }}
//             />
//         ),
//         /*
//           Or create a completely new type - `tomatoToast`,
//           building the layout from scratch.

//           I can consume any custom `props` I want.
//           They will be passed when calling the `show` method (see below)
//         */
//         info: ({ text1, props }) => (
//             <View style={styles.toastMsgContainer}>
//                 <Image source={props.image} style={{ height: 20, width: 20 }} />
//                 <View>
//                     <Text
//                         style={styles.toastMsgText}
//                     >{props.msg1}</Text>
//                     {
//                         props.msg2 && <Text style={styles.toastMsgText}>{props.msg2}</Text>
//                     }

//                 </View>
//             </View>
//         )
//     };


//     const showToast = (image, message) => {
//         Toast.show({
//             type: 'info',

//             // And I can pass any custom props I want
//             props: {
//                 image: image,
//                 msg1: message
//             }
//         });
//     }


//     const EditRemoveButton = (item, index) => {
//         return (
//             <View style={styles.buttonView}>
//                 <TouchableOpacity style={styles.ButtonTouchable}
//                     onPress={() => {
//                         setIndex(index)
//                         navigation.navigate('AddAddressDetail', { EDIT: item })
//                     }}>
//                     <Text style={styles.buttonText}>EDIT</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.ButtonTouchable}
//                     onPress={() => {
//                         setIndex(index);
//                         setId(item);
//                         setModalVisible(true);
//                     }}
//                 >
//                     <Text style={styles.buttonText}>REMOVE</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }

//     const onPress = (index) => {
//         setChecked(index);
//     }

//     const renderItem = ({ item, index }) => {
//         return (
//             <View style={{ marginBottom: 10 }}>
//                 <View style={styles.DeliveryCard}>
//                     <View style={styles.rowCont}>
//                         <View style={{ flexDirection: 'row', gap: 10 }}>
//                             <RadioButton
//                                 innerColor={Colors.themeColor}
//                                 outerColor={Colors.GRAY}
//                                 animation={'bounceIn'}
//                                 isSelected={checked === index}
//                                 onPress={() => { onPress(index) }}
//                                 size={10}
//                             />
//                             <Text style={styles.deliverUserName} numberOfLines={2}>{item.Value.name}</Text>
//                         </View>
//                         <View style={styles.deliveryLocation}>
//                             <Text style={styles.deliveryType}>{item.Value.saveAddAs}</Text>
//                         </View>
//                     </View>
//                     <Text style={styles.deliverUserAdd}>{`${item.Value.houseFlatNo} ${item.Value.buildingType}, ${item.Value.nearByLandMark}`}</Text>
//                     <Text style={styles.deliverUserAdd}>{item.Value.phoneNo}</Text>
//                 </View>

//                 <View style={{ backgroundColor: Colors.WHITE }} >
//                     {EditRemoveButton(item, index)}
//                 </View>

//             </View>
//         );
//     }

//     const keyExtractor = (item, index) => {
//         return index;
//     };

//     return (
//         <>
//             <ProductHeader title={'Select a delivery Address'} />
//             {
//                 ADDRESS_DETAIL.length > 0
//                     ?
//                     <>
//                         <View style={{ height: '50%' }}>
//                             <FlatList
//                                 data={ADDRESS_DETAIL}
//                                 renderItem={renderItem}
//                                 keyExtractor={keyExtractor}
//                             />
//                         </View>
//                         <AppButton label={'Add New Address'}
//                             isEmptyBG
//                             leftSideImg
//                             ImgURI={Images.plusIcon}
//                             labelStyle={{ color: Colors.themeColor }} containerStyle={{ marginTop: '8%' }}
//                             onPress={() => navigation.navigate('AddAddressDetail')}
//                         />
//                     </>
//                     :
//                     <EmptyAddress />
//             }

//             <View style={styles.bottomButtonContainer}>
//                 <AppButton label={'Deliver to this Address'}
//                     view={ADDRESS_DETAIL.length ? false : true}
//                     onPress={() => {
//                         const storeUser = async () => {
//                             try {
//                                 let name = "PAYMENT";
//                                 await AsyncStorage.setItem("BUTTON", name);
//                             } catch (error) {
//                                 console.log(error);
//                             }
//                         };
//                         storeUser();
//                         props.setScreenType('PAYMENT')
//                     }}
//                 />
//             </View>

//             {/* <Toast
//                 config={toastConfig}
//                 position="bottom"
//                 visibilityTime={2000}
//                 autoHide={true} /> */}

//             <Toast
//                 config={toastConfig}
//                 position="bottom"
//                 visibilityTime={2000}
//                 autoHide={true}
//             />

//             <Modal
//                 visible={modalVisible}
//                 animationType="slide"
//                 transparent={true}
//                 onRequestClose={() => {
//                     setModalVisible(false);
//                 }}
//                 statusBarTranslucent={true}
//                 activeOpacity={0.9}>

//                 <View style={styles.modalMainCont}>
//                     <View style={styles.modalContainer}>
//                         <Text style={styles.removeHeading}>Remove Address</Text>
//                         <Text style={styles.removeDesc}>Are you sure you want to remove this address from your address book?</Text>
//                         <View style={styles.modalBtnCont}>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     setModalVisible(false);
//                                 }}
//                                 style={styles.btnViewCont}
//                             >
//                                 <Text style={styles.modalBtnText}>No</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity
//                                 onPress={() => {
//                                     // const newAddressList = ADDRESS_DETAIL.filter((item, i) => i !== index);
//                                     // setAddressList(newAddressList);
//                                     dispatch(removeAddress(id));
//                                     setModalVisible(false);
//                                     showToast(Images.deleteIcon, 'Address Removed Successfully')
//                                     // showToast('Remove')
//                                 }}
//                                 style={[styles.btnViewCont, { backgroundColor: Colors.themeColor }]}
//                             >
//                                 <Text style={[styles.modalBtnText, { color: Colors.WHITE }]}>Yes, Remove it</Text>
//                             </TouchableOpacity>
//                         </View>

//                     </View>
//                 </View>
//             </Modal>

//         </>

//     )
// }

// export default Address;

// const styles = StyleSheet.create({
//     buttonView: {
//         flexDirection: 'row', borderTopColor: Colors.GRAY, borderTopWidth: 1,

//     },
//     ButtonTouchable: {
//         width: '50%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRightColor: Colors.GRAY, borderRightWidth: 1
//     },
//     cardView: {
//         backgroundColor: Colors.WHITE, paddingTop: 20, paddingHorizontal: 20
//     },
//     buttonText: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontWeight: 600,
//         color: Colors.themeColor
//     },
//     userName: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontWeight: 600,
//         fontSize: 16
//     },
//     userAdd: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         color: Colors.PRICEGRAY
//     },
//     userLocationView: {
//         backgroundColor: Colors.LIGHTBLUE1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 30
//     },
//     userLocationText: {
//         color: Colors.WHITE, fontFamily: fonts.VisbyCF_Bold
//     },
//     bottomButtonContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: Colors.WHITE,
//         paddingVertical: '2%'
//     },
//     toastMsgContainer: {
//         height: 60, width: '90%', backgroundColor: Colors.WHITE, flexDirection: 'row', padding: 10, borderRadius: 8, marginHorizontal: 20, alignItems: 'center', gap: 10,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.10,
//         elevation: 7,
//     },
//     infoMsg: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         lineHeight: 15,
//         letterSpacing: 0.5,
//     },
//     toastMsgText: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontSize: 16,
//         letterSpacing: 0.5
//     },
//     modalMainCont: {
//         flex: 1, justifyContent: "center", alignItems: "center"
//     },
//     modalContainer: {
//         backgroundColor: "white", padding: 25, height: hp(20), marginHorizontal: 20, borderRadius: 5, width: wp(90)
//     },
//     removeHeading: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontWeight: 600,
//         fontSize: 16,
//         lineHeight: 21,
//         letterSpacing: 0.5
//     },
//     removeDesc: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         letterSpacing: 0.5,
//         lineHeight: 19,
//         color: Colors.PRICEGRAY
//     },
//     modalBtnCont: {
//         flexDirection: 'row', marginVertical: '5%', justifyContent: 'space-between'
//     },
//     btnViewCont: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         // backgroundColor: Colors.themeColor,
//         borderRadius: 24,
//         padding: 8,
//         width: '50%',
//         justifyContent: 'center',
//         marginHorizontal: '1%',
//         borderWidth: 1,
//         borderColor: Colors.themeColor
//     },
//     modalBtnText: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         fontSize: 12,
//         letterSpacing: 0.5,
//     },

//     DeliveryCard: {
//         backgroundColor: Colors.WHITE,
//         padding: 20,
//     },
//     rowCont: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: "center",
//         marginBottom: 5
//     },
//     deliverUserName: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontWeight: 600,
//         fontSize: 16,
//         letterSpacing: 0.5,
//         // maxWidth: '80%'
//     },
//     deliveryLocation: {
//         backgroundColor: Colors.LIGHTBLUE1,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         borderRadius: 30
//     },
//     deliveryType: {
//         color: Colors.WHITE,
//         fontFamily: fonts.VisbyCF_Bold
//     },
//     deliverUserAdd: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         color: Colors.PRICEGRAY,
//         letterSpacing: 0.5,
//         lineHeight: 19
//     },
// })

import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MyAddresss from '../../../Components/MyAddress';
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../../constant/Images';
import { hp, wp } from '../../../constant/responsiveFunc';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constant/Colors';
// import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import EmptyAddress from './EmptyAddress';
import ProductHeader from '../../Components/Cards/ProductHeader';
import AppButton from '../../Components/AppButton';

const Address = () => {

    const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: 'red' }}>
            <ProductHeader
                title={'Select a delivery Address'}
                ContainerStyle={{ marginVertical: '5%' }}
            />
            {
                ADDRESS_DETAIL.length ?
                    <MyAddresss
                        isRadioButton
                    />
                    :
                    <EmptyAddress />
            }
            {
                ADDRESS_DETAIL.length
                    ?
                    <AppButton label={'Add New Address'}
                        isEmptyBG
                        leftSideImg
                        ImgURI={Images.plusIcon}
                        labelStyle={{ color: Colors.themeColor }} containerStyle={{ marginVertical: '8%' }}
                        onPress={() => navigation.navigate('NewAddress')}
                    />
                    : null
            }

            {/* <View style={styles.bottomButtonContainer}>
                <AppButton label={'Deliver to this Address'}
                    view={ADDRESS_DETAIL.length ? false : true}
                    onPress={() => {
                        // const storeUser = async () => {
                        //     try {
                        //         let name = "PAYMENT";
                        //         await AsyncStorage.setItem("BUTTON", name);
                        //     } catch (error) {
                        //         console.log(error);
                        //     }
                        // };
                        // storeUser();
                        props.setScreenType('PAYMENT')
                    }}
                />
            </View> */}
        </View>
    )
}

export default Address;

const styles = StyleSheet.create({
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        paddingVertical: '2%'
    },
})