import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import Images from '../../../constant/Images';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import Separator from '../../../constant/Separator';
import { wp, hp } from '../../../constant/responsiveFunc';
import { useDispatch } from 'react-redux';
import { removeWishlistItem } from '../../Store/actions/wishlistActions';
import { addToCart } from '../../Store/actions/cartAction';
import Toast from 'react-native-toast-message';
import { translate } from '../../../utility';
import { productCollection } from '../../../constant/DemoArray';


const Wishlist = () => {
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cartReducer);
    const { WISHLIST_ITEMS } = useSelector(state => state.wishlistReducer);

    console.log('Check wishlist data : ', productCollection)

    const RemoveButton = (props) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, alignSelf: 'flex-end', backgroundColor: Colors.LightGray, padding: '5%', borderRadius: 100, right: 10 }}
                onPress={props.onPress}
            >
                <Image source={Images.CrossIcon} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
            </TouchableOpacity>
        );
    }

    const toastConfig = {
        info: ({ text1, props }) => (
            <View style={styles.toastMsgContainer}>
                <Image source={props.type === 'ADD' ? Images.ToastSuccess : Images.deleteIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                <View>
                    <Text
                        style={[styles.toastMsgText, { fontWeight: 600 }]}
                        numberOfLines={5}
                    >
                        {props.item}
                        <Text style={{ fontWeight: 500 }}>{`${props.type === 'ADD' ? translate('common.movedToCart') : translate('common.removedFromWishlist')}`}</Text>
                    </Text>
                </View>
            </View>
        )
    };

    const showToast = (type, item) => {
        Toast.show({
            type: 'info',
            props: {
                type: type,
                item: item
            }
        });
    }


    const renderItem = ({ item, index }) => {
        console.log('item : ', item)
        return (
            <TouchableOpacity
                style={styles.collectionListItem}>
                <View style={styles.listItemContainer}>
                    <RemoveButton
                        onPress={() => {
                            dispatch(removeWishlistItem(item));
                            showToast('DELETE', item?.name);
                        }}
                    />
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image source={Images.Android} style={{ height: 100, width: 100, resizeMode: 'contain' }} />
                    </View>

                    <View style={{
                        paddingVertical: hp('2%'),
                        paddingHorizontal: '5%'
                    }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Image source={Images.star} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                            <Text style={[styles.price, { fontSize: 10 }]}>4.5</Text>
                            <Text style={[styles.name, { fontSize: 10, color: Colors.PRICEGRAY }]}>(1045 {translate('common.reviews')})</Text>
                        </View>
                    </View>


                    <TouchableOpacity
                        style={{ paddingTop: 10, borderTopColor: Colors.GRAY, borderTopWidth: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            dispatch(addToCart(item))
                            dispatch(removeWishlistItem(item));
                            showToast('ADD', item?.name)
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fonts.VisbyCF_Demibold,
                                fontWeight: 600,
                                fontSize: 12,
                                letterSpacing: 0.5,
                                color: Colors.themeColor
                            }}
                        >{translate('common.movetocart')}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>




        );
    }


    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={translate('common.wishlist')}
            />

            {
                productCollection?.length > 0
                    ?
                    <FlatList
                        numColumns={2}
                        data={productCollection}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        showsVerticalScrollIndicator={false}

                    />
                    :
                    <EmptyDetailScreen
                        image={Images.WishlistBanner}
                        title={translate('common.movetocart')}
                        description={translate('common.startAdding')}
                        buttonLabel={translate('common.findItem')}
                    />

            }

            {/* :
            <Text>jsdflk</Text> */}
            {/* <EmptyDetailScreen
                image={Images.WishlistBanner}
                title={'Ready to make a Wish?'}
                description={'Start adding items you love to your wishlist by tapping on the heart icon'}
                buttonLabel={'Find Items to Save'}
            />
            {/* } */}

            {/*<Toast
                config={toastConfig}
                position="bottom"
                visibilityTime={2000}
                autoHide={true}
            /> */}

        </AppBackground>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     // margin: '2%',
    //     // marginHorizontal: '5%',
    //     // marginVertical: '5%',
    //     // marginRight: '2%',
    //     // margin: '2%',

    //     backgroundColor: Colors.WHITE,
    //     // margin: '5%',
    //     // paddingHorizontal: 10,
    //     // paddingTop: 10,
    //     // marginLeft: '5%',
    //     marginVertical: '5%',
    //     marginLeft: '5%',
    //     paddingVertical: 10,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     width: wp(40)
    // },
    name: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5
    },
    price: {
        fontFamily: fonts.VisbyCF_Bold,
        fontWeight: 700,
        letterSpacing: 0.5
    },
    collectionListItem: {
        marginVertical: wp("3"),
        marginHorizontal: wp("3"),
        width: (wp('100%') / 2) - wp('6%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,

    },
    listItemContainer: {
        width: "100%",
        // borderRadius: 20,
        paddingVertical: '5%',
        overflow: 'hidden',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    toastMsgContainer: {
        // height: 60,
        flex: 1,
        width: wp(90),
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        // marginHorizontal: 20,
        alignItems: 'center',
        // flexWrap: 'wrap',
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        zIndex: 1,
        overflow: 'hidden'
    },
    toastMsgText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5
    },
})








// import { StyleSheet, Text, View, FlatList } from 'react-native'
// import React from 'react'
// import AppBackground from '../../Components/AppBackground';
// import AppHeader from '../../Components/AppHeader';
// import { wp } from '../../../constant/responsiveFunc';

// const Wishlist = () => {
//     return (
//         // <View style={{flex: 1, backgroundColor: 'red'}}>

//         // </View>
//         <AppBackground>
//             <AppHeader
//                 showBackButton
//                 title={'Wishlist'}
//             />
//             <View style={{ flex: 1, backgroundColor: 'red', width: wp(100) }}>

//                 <FlatList
//                     numColumns={2}
//                     data={[1, 2, 3, 4, 5]}
//                     renderItem={({ item }) => (
//                         <View style={{ backgroundColor: 'green', width: wp(45.5), alignItems: 'center', margin: '2%' }}>
//                             <Text style={{ padding: 20, fontSize: 18 }}>{"item.title"}</Text>
//                         </View>
//                     )}
//                     keyExtractor={(item, i) => i}
//                     contentContainerStyle={{
//                         flexGrow: 1,
//                     }}
//                 />

//             </View>
//         </AppBackground>
//     )
// }

// export default Wishlist;

// const styles = StyleSheet.create({})