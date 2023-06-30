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
import { wp } from '../../../constant/responsiveFunc';
import { useDispatch } from 'react-redux';
import { removeWishlistItem } from '../../Store/actions/wishlistActions';
import { addToCart } from '../../Store/actions/cartAction';


const Wishlist = () => {
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cartReducer);
    const { WISHLIST_ITEMS } = useSelector(state => state.wishlistReducer);

    console.log('Check wishlist data : ', WISHLIST_ITEMS)

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


    const renderItem = ({ item, index }) => {
        return (

            <View style={{ backgroundColor: Colors.WHITE, width: wp(45.5), alignItems: 'center', marginHorizontal: '2%', marginTop: '4%', paddingVertical: 10, borderRadius: 10 }}>

                <RemoveButton
                    onPress={() => dispatch(removeWishlistItem(item))}
                />

                <Image source={item.image} style={{ height: 100, width: 100, resizeMode: 'contain' }} />

                <View style={{ paddingVertical: 10 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                        <Image source={Images.star} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                        <Text style={[styles.price, { fontSize: 10 }]}>4.5</Text>
                        <Text style={[styles.name, { fontSize: 10, color: Colors.PRICEGRAY }]}>(1045 Reviews)</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{ paddingTop: 10, borderTopColor: Colors.GRAY, borderTopWidth: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                    // onPress={() => dispatch(addToCart(item))}
                >
                    <Text
                        style={{
                            fontFamily: fonts.VisbyCF_Demibold,
                            fontWeight: 600,
                            fontSize: 12,
                            letterSpacing: 0.5,
                            color: Colors.themeColor
                        }}
                    >Move to Cart</Text>
                </TouchableOpacity>


            </View>


        );
    }


    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Wishlist'}
            />

            {
                WISHLIST_ITEMS.length ?
                    <View style={{ flex: 1, width: wp(100), paddingHorizontal: '1%' }}>
                        <FlatList
                            numColumns={2}
                            data={WISHLIST_ITEMS}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            contentContainerStyle={{
                                // flexGrow: 1,
                            }}
                        />
                    </View>
                    : <EmptyDetailScreen
                        image={Images.WishlistBanner}
                        title={'Ready to make a Wish?'}
                        description={'Start adding items you love to your wishlist by tapping on the heart icon'}
                        buttonLabel={'Find Items to Save'}
                    />

            }
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                {
                    cartItems.length ?
                        <FlatList
                            numColumns={2}
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: 'red', margin: 5, width: '40%'}}>
                                    <Text style={{ padding: 20, fontSize: 18 }}>{"item.title"}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index}
                            contentContainerStyle={{
                                flexGrow: 1,
                            }}
                        />
                        :
                        <EmptyDetailScreen
                            image={Images.WishlistBanner}
                            title={'Ready to make a Wish?'}
                            description={'Start adding items you love to your wishlist by tapping on the heart icon'}
                            buttonLabel={'Find Items to Save'}
                        />

                }
            </View> */}
            {/* <View style={{ flex: 1, width: wp(100), paddingHorizontal: '1%', backgroundColor: 'red', alignItems: 'center' }}>
                <FlatList
                    numColumns={2}
                    data={cartItems}
                    // renderItem={({ item }) => (
                    //     <View style={{ backgroundColor: 'green', width: wp(45.5), alignItems: 'center', margin: '2%' }}>
                    //         <Text style={{ padding: 20, fontSize: 18 }}>{"item.title"}</Text>
                    //     </View>
                    // )}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={{
                        flexGrow: 1,
                        // marginHorizontal: '2%'
                    }}
                />
            </View> */}
        </AppBackground>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // margin: '2%',
        // marginHorizontal: '5%',
        // marginVertical: '5%',
        // marginRight: '2%',
        // margin: '2%',

        backgroundColor: Colors.WHITE,
        // margin: '5%',
        // paddingHorizontal: 10,
        // paddingTop: 10,
        // marginLeft: '5%',
        marginVertical: '5%',
        marginLeft: '5%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: wp(40)
    },
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
    }
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