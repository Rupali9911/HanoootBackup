import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';

const CustomList = () => {

    const Data = [
        {
            name: 'One Plus 5',
            price: '$ 5,52.00',
            offerPrice: '$ 5,00.00',
            image: Images.mobile

        },
        {
            name: 'One Plus 5',
            price: '$ 5,52.00',
            offerPrice: '$ 5,00.00',
            image: Images.mobile2

        },
        {
            name: 'One Plus 5',
            price: '$ 5,52.00',
            offerPrice: '$ 5,00.00',
            image: Images.mobile3

        },
        {
            name: 'One Plus 5',
            price: '$ 5,52.00',
            offerPrice: '$ 5,00.00',
            image: Images.mobile4

        },
        {
            name: 'One Plus 5',
            price: '$ 5,52.00',
            offerPrice: '$ 5,00.00',
            image: Images.mobile5

        }

    ];


    const renderItem = ({ item, index }) => {

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 8, color: Colors.themeColor, padding: 3, borderRadius: 5, backgroundColor: '#FFCD1A' }}>{'Express'}</Text>
                    <Image source={Images.like} style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.listItemImage}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.priceLineThrough}>{item.price} </Text>
                            <Text style={styles.price}>{item.offerPrice}</Text>
                        </View>
                        <View style={{flexDirection: 'row',}}>
                        <Text>{'4.0'}</Text>
                        <Image source={Images.star} style={{height: 15, width: 15}}/>
                        <Text>{'(79)'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }



    const keyExtractor = (item, index) => {
        return `_${index}`;
    };


    return (
        <>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5}}>New Arrivals</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5, color: Colors.themeColor}}>See All</Text>
        </View>
        <View style={styles.listView}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
        </>
    )
}

export default CustomList;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 15,
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 15

    },
    listView: {
        alignItems: 'center',
        // paddingTop: 20,
    },
    listItemImage: {
        // height: 100, width: 100, justifyContent: 'center', alignItems: 'center', padding: 25, borderColor: Colors.GRAY, borderWidth: 1, borderRadius: 10
        padding: 20
    },
    image: {
        height: 100, width: 100, resizeMode: 'contain'
    },
    textContainer: {
        alignItems: 'flex-start', padding: 5,
    },
    name: {
        fontWeight: 700, lineHeight: 19, letterSpacing: 0.5, lineHeight: 20
    },
    priceLineThrough: {
        color: Colors.GRAYDARK, textDecorationLine: 'line-through', textDecorationStyle: 'solid', lineHeight: 20
    },
    price: {
        color: Colors.GREEN, fontWeight: 500
    }
})