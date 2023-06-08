import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors';
import Images from '../../../constant/Images';
import ProductHeader from './ProductHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import { LikeImage, ExpressView } from '../../../constant/ListConstant'

const ProductList = (props) => {

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

    const Arr2 = [
        {
            image: Images.hp
        },
        { image: Images.huawei },
        { image: Images.iPhone },
        { image: Images.hp },

    ]


    const renderProductCollection = ({ item, index }) => {

        return (

            <View style={[styles.container1, props.ViewContStyle]}>
                <View style={styles.topLine}>
                    {
                        props.isExpress && <ExpressView />
                    }
                    {
                        props.isLike && <LikeImage />
                    }
                </View>
                <View style={[styles.imageContainer, props.imgContStyle]}>
                    <Image
                        source={item.image}
                        style={[styles.productImg, props.imgStyle]}
                    />
                </View>
                <View style={[styles.textView, props.TextViewStyle]}>
                    {/* {
                        props.isPriceOff ?

                            <View style={{ paddingVertical: 2, paddingHorizontal: 10, backgroundColor: Colors.RED, width: 60, borderRadius: 10, marginVertical: 5 }}>
                                <Text style={{
                                    // fontFamily: fonts.VisbyCF_Demibold
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    fontSize: 10,
                                    fontWeight: '600',
                                    color: Colors.WHITE

                                }}>{'50% Off'}</Text>
                            </View>
                             :
                              null
                    } */}
                    <Text style={styles.productName} numberOfLines={2}>{'Apple iPad  10.2 - inch Bionic chip '}</Text>

                    {/* {props.price ? <Text style={[styles.price, { color: Colors.BLACK }]}>{'$ 5,00.00'}</Text> : null} */}


                    {
                        props.TotalPrice && <Text style={[styles.price, props.TotalPriceStyle]}>{'$ 5,00.00'}</Text>
                    }


                    {
                        props.DisCountPrice &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{item.price} </Text>
                            {props.isDiscountPercent && <Text style={styles.ProductDiscPercent} numberOfLines={1}>{'%15 Off'}</Text>}
                        </View>
                    }

                    {
                        props.PriceInGreen && <Text style={[styles.price, {color: Colors.PRICEGREEN}]}>{'$ 5,00.00'}</Text>
                    }

                    {/* {
                        props.priceWithDiscount ?

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    lineHeight: 19,
                                    letterSpacing: 0.5,
                                    fontWeight: 700,
                                    color: Colors.PRICEGRAY,
                                    textDecorationLine: 'line-through',
                                    textDecorationStyle: 'solid',

                                }}>{item.price} </Text>
                                <Text style={{
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    lineHeight: 19,
                                    letterSpacing: 0.5,
                                    fontWeight: 700,
                                    color: Colors.PRICEGREEN
                                }} numberOfLines={1}>{'%15 Off'}</Text>
                            </View> : <View>
                                <Text style={[styles.discountPrice, props.discountPriceStyle]}>{'$ 5,00.00'}</Text>
                                <Text style={[styles.price, props.priceStyle]}>{'$ 5,00.00'}</Text>

                            </View>
                    } */}
                    {
                        props.isRating &&

                        <View style={styles.ratingView}>
                            <Text style={styles.rating}>{'4.0'}</Text>
                            <Image source={Images.star} style={styles.ratingImg} />
                            <Text style={styles.ratingVal}>{'(79)'}</Text>
                        </View>
                    }
                </View>
            </View>
        );
    }



    const keyExtractor1 = (item, index) => {
        return `_${index}`;
    };


    const renderBrandList = ({ item, index }) => {

        return (
            // <View style={{ backgroundColor: Colors.WHITE, padding: 20, margin: 10, borderRadius: 5 }}>
            //     <Image
            //         source={item.image}
            //         style={{ height: 80, width: 80, resizeMode: 'contain' }}
            //     />
            // </View>
            <View style={{ height: hp(12), width: wp(26), backgroundColor: Colors.WHITE, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Image
                    source={item.image}
                    style={{ height: 80, width: 80, resizeMode: 'contain' }}
                />
            </View>
        );
    }


    const keyExtractor2 = (item, index) => {
        return `_${index}`;
    };


    // const ProductHeader = () => {
    //     return(
    //         <View style={{ padding: 20 }}>
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
    //                 <Text style={styles.heading}>{props.heading}</Text>
    //                 <Text style={styles.seeAllTxt}>See All</Text>
    //             </View>
    //             {props.endTime ? <Text style={styles.endTime}>{props.endTime}</Text> : null}

    //         </View>
    //     );
    // }


    const renderBrandProducts = () => {
        return (
            <FlatList
                data={Arr2}
                renderItem={renderBrandList}
                keyExtractor={keyExtractor2}
                horizontal
                showsHorizontalScrollIndicator={false}
            />);
    }

    return (
        <>
            <FlatList
                data={props.Data}
                renderItem={renderProductCollection}
                keyExtractor={keyExtractor1}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            {
                props.isBrand && renderBrandProducts()
            }
        </>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: Colors.WHITE,
        width: wp(33),
        padding: 15,
        borderRadius: 10,
        margin: 10
    },

    container: {
        justifyContent: 'center',
        marginHorizontal: 15,
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 15,
        marginBottom: 10

    },
    listView: {
        alignItems: 'center',

    },
    listItemImage: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100, width: 100, resizeMode: 'contain',

    },
    textView: {
        top: 10
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
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        // color: Colors.GREEN
    },
    heading: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5
    },
    seeAllTxt: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5, color: Colors.themeColor
    },
    endTime: {
        color: '#DA3250', fontWeight: 'bold', paddingVertical: 5
    },
    imageContainer: {
        alignSelf: 'center',
        padding: 20
    },
    discountPrice: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productImg: {
        height: 70, width: 70, resizeMode: 'contain'
    },
    productName: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.5,
        fontWeight: 500,
    },
    productDiscountPrice: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    ProductDiscPercent: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGREEN
    },
    rating: {
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 11,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontWeight: 800
    },
    ratingVal: {
        fontSize: 11,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 600
    },
    ratingImg: {
        height: 12, width: 12, resizeMode: 'contain'
    },
    ratingView: {
        flexDirection: 'row', alignItems: 'center', gap: 3
    }

})