import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EmptyDetailScreen from '../EmptyDetailScreen';
import fonts from '../../constant/fonts';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import AppButton from '../../screens/Components/AppButton';
import { useNavigation } from '@react-navigation/native';
import RadioButton from 'react-native-radio-button'





const MyAddresss = () => {
    const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);

    const navigation = useNavigation();



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

                {/* <View style={{ backgroundColor: Colors.WHITE }} >
                    {EditRemoveButton(item, index)}
                </View> */}

            </View>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };



    return (
        // <View>
        //     {
        //         ADDRESS_DETAIL.length ?
        //             <>
        //                 <View style={{ height: '50%' }}>
        //                     <FlatList
        //                         data={ADDRESS_DETAIL}
        //                         renderItem={renderItem}
        //                         keyExtractor={keyExtractor}
        //                     />
        //                 </View>
        //                 <AppButton label={'Add New Address'}
        //                     isEmptyBG
        //                     leftSideImg
        //                     ImgURI={Images.plusIcon}
        //                     labelStyle={{ color: Colors.themeColor }} containerStyle={{ marginTop: '8%' }}
        //                     onPress={() => navigation.navigate('AddAddressDetail')}
        //                 />
        //             </>
        //             :
        //             <EmptyDetailScreen />
        //     }
        // </View>

        <FlatList
            data={ADDRESS_DETAIL}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />

    )
}

export default MyAddresss

const styles = StyleSheet.create({})