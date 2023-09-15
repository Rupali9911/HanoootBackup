import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import fonts from '../../constant/fonts';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import AppButton from '../../screens/Components/AppButton';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import RadioButton from 'react-native-radio-button';
import { hp, wp } from '../../constant/responsiveFunc';
import { removeAddressDetails } from '../../screens/Store/actions/checkoutAction';
import AppModal from '../universal/Modal';
import { translate } from '../../utility';

const AddressDetail = (props) => {
    const [id, setId] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const { addressRecordList } = useSelector(state => state.checkoutReducer);
    const [checked, setChecked] = useState(addressRecordList[0]?.id)

    const dispatch = useDispatch();
    const navigation = useNavigation();



    console.log('ADDRESS_RECORD_LIST : ', addressRecordList)


    const EditRemoveButton = (props) => {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.ButtonTouchable}
                    onPress={() => navigation.navigate('NewAddress', { editData: props.item, isProfileScreen: props.profile })}
                >
                    <Text style={styles.buttonText}>{translate('common.edit')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonTouchable}
                    onPress={() => {
                        setId(props.item?.id);
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.buttonText}>{translate('common.remove')}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const onPressRadioButton = (index) => {
        setChecked(index);
        props.getParticularAddId(index)
    }


    console.log('setChecked', checked)

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginTop: hp('1%') }}>
                <View style={styles.DeliveryCard}>
                    <View style={styles.rowCont}>
                        <View style={{ flexDirection: 'row', gap: 10, maxWidth: '80%' }}>
                            {
                                props.showRadioButton &&
                                <RadioButton
                                    innerColor={Colors.themeColor}
                                    outerColor={Colors.GRAY}
                                    animation={'bounceIn'}
                                    isSelected={checked === item?.id}
                                    onPress={() => { onPressRadioButton(item?.id) }}
                                    size={10}
                                />
                            }
                            <Text style={styles.deliverUserName} numberOfLines={2}>{item?.name ? item?.name : 'UserName'}</Text>
                        </View>
                        <View style={styles.deliveryLocation}>
                            <Text style={styles.deliveryType}>{item?.address_type}</Text>
                        </View>
                    </View>
                    <Text style={styles.deliverUserAdd}>{`${item?.house} ${item?.building}, ${item?.landmark}`}</Text>
                    <Text style={styles.deliverUserAdd}>{item?.phone_number}</Text>
                </View>

                <View style={{ backgroundColor: Colors.WHITE }} >
                    <EditRemoveButton
                        item={item}
                        index={index}
                        profile={props.profile}

                    />
                </View>
            </View>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderFooter = () => {
        return (
            <AppButton
                label={translate('common.addnewaddress')}
                isEmptyBG
                leftSideImg
                ImgURI={Images.plusIcon}
                labelStyle={{ color: Colors.themeColor }} containerStyle={{ marginVertical: '8%' }}
                onPress={() => navigation.navigate('NewAddress')}
            />
        );
    }


    const RemoveModalContent = (props) => {
        return (
            <View style={styles.modalContainer}>
                <Text style={styles.removeHeading}>{translate('common.removeaddress')}</Text>
                <Text style={styles.removeDesc}>{translate('common.removeAddMessage')}</Text>
                <View style={styles.modalBtnCont}>
                    <TouchableOpacity
                        onPress={props.onCancelPress}
                        style={styles.btnViewCont}
                    >
                        <Text style={styles.modalBtnText}>{translate('common.no')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.onRemovePress}
                        style={[styles.btnViewCont, { backgroundColor: Colors.themeColor }]}
                    >
                        <Text style={[styles.modalBtnText, { color: Colors.WHITE }]}>{translate('common.yesRemoveIt')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    return (
        <>
            <FlatList
                style={{ marginBottom: hp(5) }}
                data={addressRecordList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListFooterComponent={props.showBottomButton && renderFooter}
            />
            <AppModal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <RemoveModalContent
                    onCancelPress={() => {
                        setModalVisible(false);
                    }}
                    onRemovePress={() => {
                        dispatch(removeAddressDetails(id));
                        setModalVisible(false);
                    }}
                />
            </AppModal>

        </>

    )
}

export default AddressDetail

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
        height: 60,
        width: '90%',
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 20,
        alignItems: 'center',
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        zIndex: 1
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
        backgroundColor: Colors.WHITE1,
        padding: 20,
        height: hp(20),
        // marginHorizontal: 20, 
        borderRadius: 4,
        width: wp(85),
        gap: 10
    },
    removeHeading: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5



    },
    removeDesc: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 19,
        color: Colors.PRICEGRAY
    },
    modalBtnCont: {
        flexDirection: 'row',
        //  marginVertical: '5%', 
        justifyContent: 'space-between'
    },
    btnViewCont: {
        borderRadius: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.themeColor,
        height: hp(4.06),
        width: wp(35.73)
    },
    modalBtnText: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: Colors.themeColor
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