import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Images from '../../../constant/Images'
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import Separator from '../../../constant/Separator'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { orderListLoadingStart, orderListReset, orderListPageChange, getOrderList } from '../../Store/actions/orderAction'
import Loader from '../../../constant/Loader'
import { translate } from '../../../utility'
import { getMonths } from '../../../constant/SwitchRenders'

const MyOrderList = () => {
    const { orderList, isOrderDataLoading, orderPageChange, orderTotal } = useSelector(state => state.orderReducer);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderListLoadingStart());
        dispatch(orderListReset());
        getOrders(1);
        dispatch(orderListPageChange(1));
    }, [isFocused]);

    const getOrders = useCallback(page => {
        dispatch(getOrderList(page));
    }, []);


    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderOrderPlacedDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const formattedDate = `${day} ${getMonths(month)} ${year}`;

        return formattedDate;
    }

    const renderSubItem = (subItem, index, mainItem) => {
        console.log('render sunitems  :', subItem, index, mainItem)
        return (
            <>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: '5%', paddingBottom: '5%' }}>
                    <View style={styles.leftContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: subItem?.ManagementProduct?.images[0] }}
                        />
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.name}>{subItem?.ManagementProduct?.title}</Text>
                            {/* <Text style={styles.orderDetail}>ORDER ID : <Text style={{ color: Colors.BLACK }}>{item?.id}</Text></Text>
                            <Text style={styles.orderDetail}>ORDER PLACED : <Text style={{ color: Colors.BLACK }}>{renderOrderPlacedDate(item?.createdAt)}</Text></Text> */}
                        </View>

                    </View>

                </View>
                <View style={styles.separator} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OrderDetail', { orderId: mainItem?.id, productId: subItem?.product_id })}
                >
                    <Text style={styles.buttonText}>{translate('common.viewdetail')}</Text>
                </TouchableOpacity>
                <View style={styles.separator} />

                {/* <View style={styles.separator} /> */}
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OrderDetail', { item: item })}
                >
                    <Text style={styles.buttonText}>VIEW DETAIL</Text>
                </TouchableOpacity> */}

            </>
            // <>
            //     <Text>{item?.title}</Text>
            //     {/* <Text>{'tem?.title'}</Text> */}
            // </>
        );
    }

    const renderItem = ({ item, index }) => {
        return (
            <>
                {item?.OrderProducts.length > 0
                    ?
                    <>
                        <View style={styles.container}>
                            <View style={styles.rowContainer}>
                                <View style={{ paddingHorizontal: '5%' }}>
                                    <Text style={styles.orderDetail}>{translate('common.orderid')} <Text style={{ color: Colors.BLACK }}>{item?.id}</Text></Text>
                                    <Text style={styles.orderDetail}>{translate('common.orderplaced')} <Text style={{ color: Colors.BLACK }}>{renderOrderPlacedDate(item?.createdAt)}</Text></Text>
                                </View>
                                <View style={[styles.separator, { marginTop: '2%' }]} />

                                {
                                    item?.OrderProducts.length > 0
                                        ?
                                        item?.OrderProducts?.map((subItem, _i) => {
                                            return (
                                                <View key={_i} >
                                                    {renderSubItem(subItem, _i, item)}
                                                </View>
                                            );
                                        })
                                        : null
                                }
                            </View>
                        </View>
                        <View style={styles.separator} />

                        {/* <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('OrderDetail', { orderId: item?.id, productId: item?.OrderProducts[0]?.product_id })}
                        >
                            <Text style={styles.buttonText}>VIEW DETAIL</Text>
                        </TouchableOpacity> */}
                    </>
                    :
                    <Text>{null}</Text>
                }






            </>
        );
    }

    const handleFlatListEndReached = () => {
        // console.log('orderTotal', orderTotal)
        // console.log('orderList.length', orderList.length)
        // if (
        //     !isOrderDataLoading &&
        //     orderList.length !== orderTotal
        // ) {
        //     let num = orderPageChange + 1;
        //     dispatch(orderListLoadingStart());
        //     getOrders(num);
        //     dispatch(orderListPageChange(num));
        // }
    }

    const renderFooter = () => {
        if (!isOrderDataLoading) return null;
        return (
            <ActivityIndicator size='small' color={Colors.themeColor} />
        )
    }

    const refreshFunc = () => {
        dispatch(orderListReset());
        getOrders(1);
        dispatch(orderListPageChange(1));
    }


    const handleFlatlistRefresh = () => {
        dispatch(orderListLoadingStart());
        refreshFunc()
        console.log('Top Refresh Called')
    }


    const renderOrderList = () => {
        return (
            <FlatList
                data={orderList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                onEndReached={handleFlatListEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                onRefresh={handleFlatlistRefresh}
                refreshing={orderPageChange === 1 && isOrderDataLoading}
            />

        );
    }

    const renderNoDataFound = () => {
        return (
            <View style={styles.sorryMessageCont}>
                <Text style={styles.sorryMessage}>{translate('common.nodatafound')}</Text>
            </View>
        );
    }

    console.log('aaaaaaaa : ', isOrderDataLoading, orderPageChange, orderList)

    return (
        // <View>
        //   <Text>index</Text>
        // </View>
        <AppBackground>
            <AppHeader
                showBackButton
                title={translate('common.myorders')}
            />
            {
                isOrderDataLoading && orderPageChange === 1 ?
                    <Loader /> :
                    orderList?.length !== 0 ?
                        renderOrderList()
                        :
                        <EmptyDetailScreen
                            image={Images.Shoping}
                            title={translate('common.waitingFirstOrder')}
                            description={translate('common.noOrderYet')}
                            buttonLabel={translate('common.continueshopping')}
                            onpress={() => navigation.navigate('HomeTab')}
                        />
            }

            {/* {
                cartItems.length ?
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    /> :
                    <EmptyDetailScreen
                        image={Images.Shoping}
                        title={'We’re waiting for your first order'}
                        description={'No orders placed yet. Shop from our categories and grab the best deals on your order.'}
                        buttonLabel={'Continue Shopping'}
                    />
            } */}




        </AppBackground>
    )
}

export default MyOrderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // padding: 15,
        backgroundColor: Colors.WHITE,
        marginTop: '2%'
    },
    leftContainer: {
        width: '20%',
        // height: '100%',
        // backgroundColor: 'red'
        // backgroundColor: 'red'
    },
    rightContainer: {
        width: '80%',
        padding: '3%'
    },
    image: {
        width: '100%',
        height: '100%',
        // height: 40,
        // width: 40,
        resizeMode: 'contain'
    },
    rowContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-around',
        // padding: '5%'
        paddingTop: '2%'
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 700,
        letterSpacing: 0.5
    },
    orderDetail: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.PRICEGRAY
    },
    separator: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1,
        width: '100%',
    },
    button: {
        backgroundColor: Colors.WHITE,
        paddingVertical: '2%',
        // padding: 10,
        // borderRadius: 4,
        // marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: {
        // fontSize: 20,
        color: Colors.themeColor,
        fontFamily: fonts.VisbyCF_Bold,
        fontWeight: 600,
        letterSpacing: 0.5

    },
})