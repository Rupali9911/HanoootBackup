import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors';
import Images from '../../../constant/Images';
import ProductHeader from './ProductHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';

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


    const renderProductList = ({ item, index }) => {

        return (

            // <View style={styles.container}>
            //     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            //         {
            //             props.express ?
            //                 <Text style={{ fontSize: 8, color: Colors.themeColor, padding: 4, borderRadius: 10, backgroundColor: '#FFCD1A' }}>{'Express'}</Text>
            //                 :
            //                 null}
            //         <Image source={Images.like} style={{ height: 20, width: 20, justifyContent: 'flex-end', alignSelf: 'flex-end' }} />
            //     </View>
            //     <View style={styles.listItemImage}>
            //         <Image
            //             source={item.image}
            //             style={styles.image}
            //         />
            //         <View style={{ marginVertical: 10 }}>

            //             <Text style={styles.name}>{item.name}</Text>
            //             <View style={{ flexDirection: 'row' }}>
            //                 <Text style={styles.priceLineThrough}>{item.price} </Text>
            //                 <Text style={styles.price}>{item.offerPrice}</Text>
            //             </View>
            //             <View style={{ flexDirection: 'row', }}>
            //                 <Text>{'4.0'}</Text>
            //                 <Image source={Images.star} style={{ height: 15, width: 15 }} />
            //                 <Text>{'(79)'}</Text>
            //             </View>
            //         </View>
            //     </View>
            // </View>

            <View style={[styles.container1, props.ViewContStyle]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                        props.isExpress ?
                            <View style={{ backgroundColor: Colors.YELLOW, paddingHorizontal: 5, borderRadius: 8, justifyContent: 'center', alignSelf: 'flex-start' }}>
                                <Text style={{


                                    //    fontFamily: fonts.Visbycf_Demiboldoblique,
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    fontSize: 8,
                                    lineHeight: 15,
                                    letterSpacing: 0.5,
                                    fontWeight: 600,
                                    fontStyle: 'italic',
                                    color: Colors.themeColor

                                }}>{'Express'}</Text>
                            </View>
                            :

                            null}
                    {
                        props.isLike ? <Image source={Images.like} style={{ height: 16, width: 16, alignSelf: 'flex-end', }} />
                            : null
                    }
                </View>
                <View style={[styles.imageContainer, props.imgContStyle]}>
                    <Image
                        source={item.image}
                        style={{ height: 70, width: 70 }}
                    />
                </View>
                <View style={[ styles.textView , props.TextViewStyle]}>
                    {
                        props.isPriceOff ?

                            <View style={{ paddingVertical: 2, paddingHorizontal: 10, backgroundColor: Colors.RED, width: 60, borderRadius: 10, marginVertical: 5 }}>
                                <Text style={{
                                    // fontFamily: fonts.VisbyCF_Demibold
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    fontSize: 10,
                                    fontWeight: '600',
                                    color: Colors.WHITE

                                }}>{'50% Off'}</Text>
                            </View> : null}
                    <Text style={{
                        // fontFamily: fonts.VisbyCF_Medium
                        fontFamily: fonts.VISBY_CF_REGULAR,
                        fontSize: 11,
                        lineHeight: 15,
                        letterSpacing: 0.5,
                        fontWeight: 500,
                        // top: 5

                    }} numberOfLines={2}>{'Apple iPad  10.2 - inch Bionic chip '}</Text>
                   {props.price ? <Text style={[styles.price, {color: Colors.BLACK}]}>{'$ 5,00.00'}</Text> : null } 
                   {
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
                   }
                    {
                        props.isRating ?

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    // fontFamily: fonts.VisbyCF_Bold,
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    fontSize: 11,
                                    letterSpacing: 0.5,
                                    lineHeight: 21,
                                    fontWeight: 800
                                }}>{'4.0'}</Text>
                                <Image source={Images.star} style={{ height: 12, width: 12 }} />
                                <Text style={{
                                    fontSize: 11,
                                    lineHeight: 21,
                                    letterSpacing: 0.5,
                                    fontFamily: fonts.VISBY_CF_REGULAR,
                                    fontWeight: 600
                                }}>{'(79)'}</Text>
                            </View> : null
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
            {/* <View style={styles.listView}>
                <FlatList
                    data={Data}
                    renderItem={renderItemList1}
                    keyExtractor={keyExtractor1}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                {
                    props.isBrand ?
                        <FlatList
                            data={Arr2}
                            renderItem={renderItemList2}
                            keyExtractor={keyExtractor2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        /> : null
                }

            </View> */}
            <FlatList
                data={props.Data}
                renderItem={renderProductList}
                keyExtractor={keyExtractor1}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            {
                props.isBrand ?
                    renderBrandProducts() : null
            }



        </>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: Colors.WHITE, width: wp(33), padding: 15, borderRadius: 10, margin: 10
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
        color: Colors.GREEN
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
        alignSelf: 'center', padding: 22
    },
    discountPrice: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
})