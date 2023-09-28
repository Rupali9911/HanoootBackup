import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { getFonts } from '../../utils'

const ProductItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.listItemImage}>
                <Image
                    source={props.Image}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.Name}</Text>
                <Text style={styles.discountPrice}>{props.DiscountPrice}</Text>
                <Text style={styles.price}>{props.Price}</Text>
            </View>
        </View>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
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
        // fontWeight: 700,
        lineHeight: 19,
        letterSpacing: 0.5,
        lineHeight: 20,
        fontFamily: getFonts.BOLD
    },
    discountPrice: {
        color: Colors.GRAYDARK, textDecorationLine: 'line-through', textDecorationStyle: 'solid', lineHeight: 20
    },
    price: {
        color: Colors.GREEN, fontWeight: 500
    }
})