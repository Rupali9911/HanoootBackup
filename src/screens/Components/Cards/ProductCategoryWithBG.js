import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react';
import Images from '../../../constant/Images';
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import { getFonts } from '../../utils';

const ProductCategoryWithBG = (props) => {

    const renderView = (image, name) => {
        return (
            <View style={{ margin: 10 }}>
                <View style={[styles.imageCont, props.ImgViewStyle]}>
                    <Image source={image} style={styles.itemImg} />
                </View>
                <Text numberOfLines={2} style={styles.itemName}>{'Kettle -Stainless Steel Body, 1.5 litre,'}</Text>
            </View>
        );
    }

    return (
        <View >
            <ImageBackground
                source={props.image}
                style={styles.BGImage}>
                <View style={{ padding: 22 }}>
                    <View style={styles.imgSection}>
                        <Text>{'Image Section'}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>{props.title}</Text>

                        <View style={styles.rowContainer}>
                            {renderView(Images.homeAppliances, 'Products')}
                            {renderView(Images.homeAppliances2, 'Products1')}
                        </View>
                        <View style={styles.rowContainer}>
                            {renderView(Images.homeAppliances3, 'Products2')}
                            {renderView(Images.homeAppliances3, 'Products3')}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ProductCategoryWithBG;

const styles = StyleSheet.create({
    BGImage: {
        height: hp(100),
        width: wp(100)
    },
    imgSection: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    container: {
    },
    title: {
        fontSize: 16,
        // fontWeight: 700,
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5,
        lineHeight: 27,
        marginVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCont: {
        width: 150,
        height: hp(13),
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemName: {
        maxWidth: 150,
        lineHeight: 19,
        top: 5,
        letterSpacing: 0.5,
        fontWeight: 600,
        fontFamily: getFonts.SEMI_BOLD
    },
    itemImg: {
        height: 75,
        width: 75,
        resizeMode: 'contain'
    }
})