import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'
import Colors from '../../constant/Colors'

const Card1 = (props) => {
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


    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <View style={styles.listItemImage}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.priceLineThrough}>{item.price}</Text>
                    <Text style={styles.price}>{item.offerPrice}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>{props.title}</Text>
            {/* {
                props.priceOff ? <Text style={styles.priceOff}>{props.priceOff}</Text> : null
            } */}
            <View style={styles.listView}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {/* <View style={styles.listView}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View> */}
        </View>
    )
}

export default Card1;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        marginVertical: 10
    },
    listView: {
        alignItems: 'center',
        paddingTop: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        // fontFamily: fonts.VISBY_CF,
        letterSpacing: 0.8,
        lineHeight: 20
    },
    container: {
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    priceOff: {
        color: Colors.themeColor,
        letterSpacing: 0.5,
        fontWeight: '700',
        paddingVertical: 3

    },
    listItemImage: {
        height: 100, width: 100, justifyContent: 'center', alignItems: 'center', padding: 25, borderColor: Colors.GRAY, borderWidth: 1, borderRadius: 10
    },
    image: {
        height: 70, width: 70, resizeMode: 'contain'
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