import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { ExpressView } from '../../constant/ListConstant'
import CartItemQuantity from './CartItemQty'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CartItemCard = (props) => {
    const { Item } = props
    const [data, setData] = useState([]);


    // useEffect(async() => {
    //     // Retrieve data from AsyncStorage
    //     try {
    //         const retrievedArray = await AsyncStorage.getItem('CARTITEMS');
    //         if (retrievedArray !== null) {
    //             // We have data!!
    //             console.log('Show Storage Items : ', JSON.parse(retrievedArray));
    //             handleCartItems(retrievedArray);
    //         }
    //     } catch (error) {
    //         // Error retrieving data
    //     }
    // }, []);

    // const handleCartItems = (newObj) => {
    //     console.log('cart items: ', newObj);
    //     const newData = [...data, newObj];
    //     setData(newData);


    //     // setData((prevData) => {[...prevData, Item]})
    //     // this.setState(prevState => ({
    //     //     items: [...prevState.items, this.state.itemName],
    //     //     itemName: ""
    //     // }));
    // };



    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderItem = ({ item, index }) => {
        return (
            // console.log()
            // <Text>fjkgdjkdhdkj</Text>
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View>
                        <Image source={item.image} style={{ height: 60, width: 60, resizeMode: 'contain', margin: '2%' }} />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                        <Text style={styles.itemDetail}>Memory : <Text style={{ color: Colors.PRICEGRAY }}>128 GB</Text></Text>
                        <Text>Color : <Text style={{ color: Colors.PRICEGRAY }}>Purple Black</Text></Text>
                        <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{'Sunday, 5 February.'}</Text></Text>
                        <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Order Within  <Text style={{ color: Colors.BLACK }}>{'8hr 40 mins.'}</Text></Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.itemDetail}>Fullfilled by <Text>Hanooot </Text></Text>
                            <ExpressView containerStyle={{ width: '20%', marginHorizontal: '1%' }} />
                        </View>
                        <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text>
                        <Text style={styles.itemName} >{item.price}</Text>
                    </View>
                </View>
                <CartItemQuantity />
            </View>
        );
    }


    // console.log('check arr data : ', Item)

    return (

        <FlatList
            data={Item}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />

    )
}

export default CartItemCard

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.WHITE,


    },
    itemName: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    itemDetail: {
        fontFamily: fonts.VISBY_CF_REGULAR, fontSize: 12, fontWeight: 600
    },
})