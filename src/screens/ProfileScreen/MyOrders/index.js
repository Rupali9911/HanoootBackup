import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Images from '../../../constant/Images'
import { useSelector } from 'react-redux';
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import Separator from '../../../constant/Separator'
import { useNavigation } from '@react-navigation/native'

const MyOrderList = () => {
    const { cartItems } = useSelector(state => state.cartReducer);
    const navigation = useNavigation();


    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Image
                            style={styles.image}
                            source={item.image}
                        />
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.name}>Apple iPhone (14 Pro)</Text>
                            <Text style={styles.orderDetail}>ORDER ID : <Text style={{ color: Colors.BLACK }}> 407-1327557-9683528 </Text></Text>
                            <Text style={styles.orderDetail}>ORDER PLACED : <Text style={{ color: Colors.BLACK }}> 9 January 2023 </Text></Text>
                        </View>

                    </View>
                </View>
                <View style={styles.separator} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OrderDetail', { item: item })}
                >
                    <Text style={styles.buttonText}>VIEW DETAIL</Text>
                </TouchableOpacity>

            </>
        );

    }

    return (
        // <View>
        //   <Text>index</Text>
        // </View>
        <AppBackground>
            <AppHeader
                showBackButton
                title={'My Orders'}
            />
            {
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
            }



        </AppBackground>
    )
}

export default MyOrderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
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