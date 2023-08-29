import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constant/Colors'
import Images from '../constant/Images'
import fonts from '../constant/fonts'
import { hp, wp, SIZE } from '../constant/responsiveFunc'
import { LikeImage, ExpressView } from '../constant/ListConstant'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeWishlistItem } from '../screens/Store/actions/wishlistActions'
import { addToWishlistAPICall } from '../services/apis/WishlistAPI'
import SVGS from '../constant/Svgs'
import { showErrorToast, showInfoToast } from './universal/Toast'

const { HeartIconActive, HeartIcon, DiscountTag } = SVGS



const ListView = (props) => {
    const {
        centerImage,
        productName,
        price,
        discount,
        averageRating,
        noOfReview,
        detailId,
        showLike,
        isCheckBox,
        isExpress,
        isItemLiked,
        categoryId,
        getIds,
        isLeftImage
    } = props;

    // console.log('averageRating : ', averageRating,noOfReview)


    // console.log('CHECK LIKED ITEM : ', isItemLiked)



    const [isLiked, setLiked] = useState(isItemLiked);
    const [checkedItems, setCheckedItems] = useState([]);
    const [arr, setArr] = useState([]);
    const [totalProductPrice, setTotalProductPrice] = useState(0);
    const [totalCost, setTotalCost] = useState(0)
    const [checkboxCount, setCheckboxCount] = useState(0);
    const [checked, setChecked] = useState([]);

    const dispatch = useDispatch();

    // const { item } = props;
    const navigation = useNavigation();
    const userData = useSelector((state) => state.userReducer.userData);


    var total = 0
    const addToWishlistProduct = async () => {
        if (userData) {
            try {
                // await addToWishlistAPICall(detailId);    
                console.log('check liked  :', isLiked)
                const response = await addToWishlistAPICall(detailId);
                if (response?.success) {
                    // console.log('response : ', reponse)

                    const typeCheck = response?.message == 'product added successfully in wishlist' ? 'SUCCESS' : 'REMOVE'

                    if (response?.message == 'product added successfully in wishlist') {
                        setLiked(true)
                        setTimeout(() => {
                            showInfoToast('SUCCESS', response?.message)
                        }, 1000);
                    }
                    else {
                        setLiked(false)
                        setTimeout(() => {
                            showInfoToast('REMOVE', response?.message)
                        }, 1000);
                    }



                    // setLiked(!isLiked)


                }
                else {
                    setLiked(false)
                }
                // setLiked(!isLiked);
            }
            catch (error) {
                console.log('Error from add to wishlist API api ', error)
                // setLiked(false);
            }
        }
        else {
            showErrorToast('For all your shopping needs', 'Please Login First')
        }

    }


    const handleCheckboxChange = (id, price) => {

        let itemIndex = getIds.indexOf(id);

        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== id));
            getIds.splice(itemIndex, 1);
        } else {
            setCheckedItems([...checkedItems, id]);
            getIds.push(id);

        }

        props.productPriceTotal(getIds)
    };


    return (
        <View style={[props.mainContainer]}>
            <TouchableOpacity
                style={[styles.ProductListContainer, props.ViewContStyle]}
                // onPress={() => navigation.navigate('ProductDetail', { id: detailId })}
                onPress={() => navigation.push('ProductDetail', { id: detailId })}
            >

                <View style={styles.topLine}>
                    {
                        isExpress && <ExpressView />
                    }
                    {
                        isLeftImage && <Image source={{ uri: 'https://w7.pngwing.com/pngs/455/531/png-transparent-%E7%B4%A2%E5%B0%BC-logo-sony-television-business-sony-television-text-logo.png' }} style={{ height: hp(1.74), width: wp(11.48) }} />
                    }
                    {/* {
                        props.isLike ?
                            <LikeImage
                                onPress={() => {
                                    setLiked(!isLiked);
                                    !isLiked ? dispatch(addToWishlist(item)) : dispatch(removeWishlistItem(item));
                                }}
                                imgStyle={{ tintColor: isLiked ? Colors.RED : Colors.BLACK }}
                            /> :
                            props.isCheckBox ?
                                <CheckBox
                                    onClick={() => {
                                        toggleChecked(item.id);
                                    }}
                                    isChecked={isChecked(item.id)}
                                    checkBoxColor={Colors.themeColor}
                                    uncheckedCheckBoxColor={Colors.GRAY}
                                /> : null
                    } */}
                    {
                        showLike
                            ?
                            <TouchableOpacity
                                onPress={addToWishlistProduct}
                            >
                                {/* {
                                    isItemLiked ? <HeartIconActive /> : isLiked ? <HeartIconActive /> : <HeartIcon />
                                } */}
                                {isLiked ? <HeartIconActive /> : <HeartIcon />}

                            </TouchableOpacity>




                            // ?
                            // isItemLiked ?
                            //     <TouchableOpacity onPress={addToWishlistProduct}>
                            //         <HeartIconActive />
                            //     </TouchableOpacity>
                            //     :
                            //     isLiked ?
                            //         <TouchableOpacity onPress={addToWishlistProduct}>
                            //             <HeartIconActive />
                            //         </TouchableOpacity>
                            //         :
                            //         <TouchableOpacity onPress={addToWishlistProduct}>
                            //             <HeartIcon />
                            //         </TouchableOpacity>
                            :
                            null


                        // <LikeImage
                        //     // onPress={() => {
                        //     //     // setLiked(!isLiked);
                        //     //     // !isLiked ? dispatch(addToWishlist(item)) : dispatch(removeWishlistItem(item));
                        //     //     try {
                        //     //         await addToWishlistAPICall(props.productId);
                        //     //         setLike(!isLike);
                        //     //     }
                        //     //     catch (error) {
                        //     //         console.log('Error from add to wishlist API api ', error)
                        //     //     }
                        //     // }}
                        //     image={isLiked ? Images.CartImage : Images.Wishlist} 
                        //     onPress={addToWishlistProduct}
                        //     // imgStyle={{ tintColor: isLiked ? Colors.RED : Colors.BLACK }}
                        // /> : null
                    }
                    {
                        isCheckBox ?
                            <CheckBox
                                onClick={() => {
                                    // toggleChecked(item.id);
                                    handleCheckboxChange(detailId, 20)

                                }}
                                isChecked={checkedItems.includes(detailId) || false}
                                checkBoxColor={Colors.themeColor}
                                uncheckedCheckBoxColor={Colors.GRAY}
                            /> : null
                    }
                </View>

                <View style={[styles.imageContainer, props.imgContStyle]}>
                    <Image
                        source={{ uri: centerImage ? centerImage : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }}
                        style={[styles.productImg, props.imgStyle]}
                    />
                </View>

                <View style={[styles.textView, props.TextViewStyle]}>
                    {
                        props.isPriceButton &&

                        <View style={styles.priceBtnView}>
                            <Text style={styles.priceBtnText}>{'50% Off'}</Text>
                        </View>

                    }
                    <Text style={styles.productName} numberOfLines={2}>{productName}</Text>

                    {
                        price &&
                        <Text style={[styles.price, props.TotalPriceStyle]}>{price}</Text>
                    }


                    {
                        discount &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{discount} </Text>
                            {props.isDiscountPercent && <Text style={styles.ProductDiscPercent} numberOfLines={1}>{discount}</Text>}
                        </View>
                    }

                    {/* {
                        props.PriceInGreen && <Text style={[styles.price, { color: Colors.PRICEGREEN }]}>{item.price}</Text>
                    } */}

                    {
                        averageRating &&

                        <View style={styles.rowContainer}>
                            <Text style={styles.rating}>{averageRating}</Text>
                            <Image source={Images.star} style={styles.ratingImg} />
                            <Text style={styles.noOfReview}>{`(${noOfReview})`}</Text>
                        </View>
                    }

                </View>

            </TouchableOpacity>
            {props.isDiscountTag &&
                <View style={{
                    position: 'absolute', bottom: 10, right: 0, marginVertical: wp('2'),
                    marginHorizontal: wp('1.5'),
                }}>
                    <DiscountTag />
                </View>
            }
            {/* <ImageBackground source={Images.DiscountTag} style={{height: hp(4.43), width: wp(5.87), resizeMode: 'contain', position: 'absolute', bottom: 10, right: 0, marginVertical: wp('2'),
                marginHorizontal: wp('1.5'),}}>
            {/* <DiscountTag /> */}
            {/* </ImageBackground>  */}
        </View>
    )
}

export default ListView

const styles = StyleSheet.create({
    ProductListContainer: {
        marginVertical: wp('2'),
        marginHorizontal: wp('2'),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        borderRadius: SIZE(10),
        elevation: 5,
        backgroundColor: Colors.WHITE1,
        paddingVertical: SIZE(15),
        paddingHorizontal: SIZE(10),
        // verticalAlign: 'top',
        overflow: 'hidden',
        alignContent: 'flex-start',
        width: wp(33)
    },
    textView: {
        marginTop: SIZE(20),
        // maxWidth: wp(35)
    },
    price: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
    },
    imageContainer: {
        alignSelf: 'center',
        // padding: 10
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZE(20)
    },
    productImg: {
        height: SIZE(70),
        width: SIZE(70),
        resizeMode: 'contain'
    },
    productName: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.5,
        fontWeight: 500,
        // backgroundColor: 'red'
        // maxWidth: wp(35)
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
    noOfReview: {
        fontSize: 11,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500
    },
    ratingImg: {
        height: SIZE(12), width: SIZE(12), resizeMode: 'contain',
        width: wp('3%')
    },
    rowContainer: {
        flexDirection: 'row', alignItems: 'center', gap: 3,
        // justifyContent: 'center'
    },
    priceBtnView: {
        // paddingVertical: 2, 
        // paddingHorizontal: 10, 
        backgroundColor: Colors.RED,
        width: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: SIZE(1)
    },
    priceBtnText: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 10,
        fontWeight: '600',
        color: Colors.WHITE
    },
    productBrandView: {
        height: hp(12), width: wp(26), backgroundColor: Colors.WHITE, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10
    },
    brandImage: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    }
})