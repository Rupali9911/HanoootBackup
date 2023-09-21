import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'

const ProductCollection = () => {

    const renderImageView = (image, height, name, price) => {
        return (
            <View style={{ margin: 5 }}>
                <ImageBackground
                    source={image}
                    style={styles.bgImageView(height)}
                    imageStyle={styles.imageStyle}
                >
                    <View style={{ padding: 10 }}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>Start ${price}</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    return (
        <View style={{ marginHorizontal: '2%' }}>
            <View style={styles.container}>
                <View style={styles.ImageContainer}>
                    {renderImageView(Images.smartWatchBG, 11, 'Smart Watch', 20)}
                    {renderImageView(Images.pinkBG, 11, 'Wireless Router', 80)}
                    {renderImageView(Images.grayBG, 18, 'Laptop Bags & Case', 220)}
                </View>
                <View style={styles.ImageContainer}>
                    {renderImageView(Images.projectorBG, 18, 'Projector', 80)}
                    {renderImageView(Images.smartWatchBG, 11, 'Tool Kit', 100)}
                    {renderImageView(Images.pinkBG, 11, 'Network', 150)}
                </View>
            </View>

            {renderImageView(Images.blueBG, 11, 'Home Appliances', 220)}

            <View style={styles.container}>
                <View style={styles.ImageContainer}>
                    {renderImageView(Images.projectorBG, 11, 'Game', 100)}
                </View>
                <View style={styles.ImageContainer}>
                    {renderImageView(Images.grayBG, 11, 'Television', 50)}
                </View>
            </View>

            {renderImageView(Images.blueBG, 11, 'Mobile Phones', 200)}

        </View>
    )
}

export default ProductCollection;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    ImageContainer: {
        width: '50%'
    },
    bgImageView: height => ({
        height: hp(height),
        width: '100%',
        resizeMode: 'contain'
    }),
    imageStyle: {
        borderRadius: 10
    },
    name: {
        fontFamily: fonts.VisbyCF_Bold,
        lineHeight: 25,
        letterSpacing: 0.5,
        // fontWeight: 700
    },
    price: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        color: Colors.RED1
    }
})