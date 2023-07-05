import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EmptyDetailScreen from '../EmptyDetailScreen';
import fonts from '../../constant/fonts';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import AppButton from '../../screens/Components/AppButton';
import { useNavigation } from '@react-navigation/native';
import RadioButton from 'react-native-radio-button'
import { hp, wp } from '../../constant/responsiveFunc';
import { removeAddress } from '../../screens/Store/actions/checkoutAction';
import { BlurView } from "@react-native-community/blur";





const MyAddresss = (props) => {
    const [id, setId] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);
    const dispatch = useDispatch();



    // console.log('CHECK ADDRESS_DETAIL DATA : ', ADDRESS_DETAIL);

    const navigation = useNavigation();

    const EditRemoveButton = (props) => {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.ButtonTouchable}
                    // onPress={() => {
                    //     // setIndex(props.index);
                    //     navigation.navigate('AddNewAddress', { EDIT: props.item })
                    // }}
                    onPress={() => navigation.navigate('NewAddress', { EDIT_DETAIL: props.item })}
                >
                    <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonTouchable}
                    onPress={() => {
                        // setIndex(props.index);
                        setId(props.item);
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.buttonText}>REMOVE</Text>
                </TouchableOpacity>
            </View>
        );
    }



    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginBottom: 10 }}>
                <View style={styles.DeliveryCard}>
                    <View style={styles.rowCont}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            {/* <RadioButton
                                innerColor={Colors.themeColor}
                                outerColor={Colors.GRAY}
                                animation={'bounceIn'}
                                isSelected={checked === index}
                                onPress={() => { onPress(index) }}
                                size={10}
                            /> */}
                            <Text style={styles.deliverUserName} numberOfLines={2}>{item?.Value?.name}</Text>
                        </View>
                        <View style={styles.deliveryLocation}>
                            <Text style={styles.deliveryType}>{item?.Value?.saveAddAs}</Text>
                        </View>
                    </View>
                    <Text style={styles.deliverUserAdd}>{`${item?.Value?.houseFlatNo} ${item?.Value?.buildingType}, ${item?.Value?.nearByLandMark}`}</Text>
                    <Text style={styles.deliverUserAdd}>{item?.Value?.phoneNo}</Text>
                </View>

                <View style={{ backgroundColor: Colors.WHITE }} >
                    <EditRemoveButton
                        item={item}
                        index={index}
                    />
                </View>

            </View>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };



    return (
        <>
            <FlatList
                data={ADDRESS_DETAIL}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />



            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                statusBarTranslucent={true}
                activeOpacity={0.9}
            >
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor={"white"}
                />
                <View style={styles.modalMainCont}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.removeHeading}>Remove Address</Text>
                        <Text style={styles.removeDesc}>Are you sure you want to remove this address from your address book?</Text>
                        <View style={styles.modalBtnCont}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                                style={styles.btnViewCont}
                            >
                                <Text style={styles.modalBtnText}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(removeAddress(id));
                                    setModalVisible(false);
                                    // showToast(Images.deleteIcon, 'Address Removed Successfully')
                                }}
                                style={[styles.btnViewCont, { backgroundColor: Colors.themeColor }]}
                            >
                                <Text style={[styles.modalBtnText, { color: Colors.WHITE }]}>Yes, Remove it</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </>

    )
}

export default MyAddresss

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },





    buttonView: {
        flexDirection: 'row', borderTopColor: Colors.GRAY, borderTopWidth: 1,

    },
    ButtonTouchable: {
        width: '50%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRightColor: Colors.GRAY, borderRightWidth: 1
    },
    cardView: {
        backgroundColor: Colors.WHITE, paddingTop: 20, paddingHorizontal: 20
    },
    buttonText: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        color: Colors.themeColor
    },
    userName: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 16
    },
    userAdd: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        color: Colors.PRICEGRAY
    },
    userLocationView: {
        backgroundColor: Colors.LIGHTBLUE1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 30
    },
    userLocationText: {
        color: Colors.WHITE, fontFamily: fonts.VisbyCF_Bold
    },
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
    toastMsgContainer: {
        height: 60, width: '90%', backgroundColor: Colors.WHITE, flexDirection: 'row', padding: 10, borderRadius: 8, marginHorizontal: 20, alignItems: 'center', gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
    },
    infoMsg: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
    },
    toastMsgText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5
    },
    modalMainCont: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    modalContainer: {
        backgroundColor: "white", padding: 25, height: hp(20), marginHorizontal: 20, borderRadius: 5, width: wp(90)
    },
    removeHeading: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    removeDesc: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 19,
        color: Colors.PRICEGRAY
    },
    modalBtnCont: {
        flexDirection: 'row', marginVertical: '5%', justifyContent: 'space-between'
    },
    btnViewCont: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: Colors.themeColor,
        borderRadius: 24,
        padding: 8,
        width: '50%',
        justifyContent: 'center',
        marginHorizontal: '1%',
        borderWidth: 1,
        borderColor: Colors.themeColor
    },
    modalBtnText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5,
    },

    DeliveryCard: {
        backgroundColor: Colors.WHITE,
        padding: 20,
    },
    rowCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 5
    },
    deliverUserName: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5,
        // maxWidth: '80%'
    },
    deliveryLocation: {
        backgroundColor: Colors.LIGHTBLUE1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30
    },
    deliveryType: {
        color: Colors.WHITE,
        fontFamily: fonts.VisbyCF_Bold
    },
    deliverUserAdd: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        color: Colors.PRICEGRAY,
        letterSpacing: 0.5,
        lineHeight: 19
    },

})