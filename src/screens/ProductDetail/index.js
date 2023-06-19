import {
    ScrollView, StyleSheet, Text, View, TouchableHighlight, Modal, ToastAndroid,
    Platform,
    AlertIOS,
    Alert,
    Button,
    Image,
    TouchableOpacity
    // Toast
} from 'react-native'
import React, { useState, useRef } from 'react'
import AppBackground from '../Components/AppBackground';
import AppHeader from '../Components/AppHeader';
import AppButton from '../Components/AppButton';
import Colors from '../../constant/Colors';
import ProductDetailCard from './ProductDetailCard';
import UserReview from './UserReview';
import ProductwithTitle from '../Components/Cards/ProductWithTitle';
import ProductHeader from '../Components/Cards/ProductHeader';
import ProductList from '../Components/Cards/ProductList';
import { productCollection, productColorVariation, productMemoryVariation, productVersionVariation, Description } from '../../constant/DemoArray';
import ProductVariation from './ProductVariation';
import ProductQuantity from './ProductQty';
import ProductSpecification from './ProductSpecification';
import Banner from '../Components/Cards/Banner';
import Images from '../../constant/Images';
import { hp, wp } from '../../constant/responsiveFunc';
import Separator from '../../constant/Separator';
import ProductSpecCard from './ProductSpecCard';
import ProductDelivery from './ProductDeliveryOptn';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import fonts from '../../constant/fonts';



// import Svgs from '../../constant/Svgs';

// const { StarIcon } = Svgs;
const ProductDetail = (props) => {
    const { route } = props;
    const { item } = route.params;
    const navigation = useNavigation();
    const myArray = ['one', 'two', 'three'];




    const [modalVisible, setModalVisible] = useState(false);
    const [cartButtonLabel, setCartButtonLabel] = useState('Add to Cart');
    const [btnCounter, setBtnCounter] = useState(1);
    const [scrollBtn, setScrollBtn] = useState(false);
    const toastRef = useRef(null);
    const CartData = [];



    const setDatatoStorage = async (obj) => {
        CartData.push(obj)
        try {
            console.log('Data saved to async storage : ', CartData);
            await AsyncStorage.setItem('CARTITEMS', JSON.stringify(obj));
        } catch (error) {
            // Error saving data
            console.log('Error while set data to async-storage');
        }
    }


    const updateButtonText = () => {
        // Update the text of the button here
        console.log('Data saved to kflsflsfdljsldfjlsjdflksjfdlsjdlk storage : ', item);

        setCartButtonLabel('View Cart')
    }


    const toastConfig = {

        info: ({ text1, text2 }) => (
            <View style={styles.toastMsgContainer}>
                <Image source={Images.ToastSuccess} style={{ height: 20, width: 20 }} />
                <View>
                    <Text
                        style={styles.toastMsgText}
                    >{text1}</Text>
                    <Text style={styles.toastMsgText}>{text2}</Text>
                </View>
            </View>
        )
    };

    const showToast = (message, message2) => {
        Toast.show({
            type: 'info',
            text1: message,
            text2: message2

        });
    }


    onScroll = event => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const showButton = scrollY > 50;
        setScrollBtn(showButton);
    };


    return (
        <AppBackground>


            <AppHeader placeholderText={'What are you looking for?'} showBackButton Search />
            <ScrollView
                // style={{ flex: 1 }}
                // onScroll={this.onScroll}
                // scrollEventThrottle={16}

            >
                <ProductDetailCard
                    ProductName={item.name}
                    Image={item.image}
                    TotalPrice={item.price}
                    DiscountPrice={item.discountPrice}
                    PricePercentOff={item.pricePercentOff}
                />
                <ProductVariation Data={productVersionVariation} title={'Version'} />
                <ProductVariation Data={productMemoryVariation} title={'Memory'} />
                <ProductVariation Data={productColorVariation} title={'Color'} />
                <ProductDelivery />
                <ProductQuantity />

                <AppButton label={cartButtonLabel}

                    onPress={() => {

                        if (cartButtonLabel === 'View Cart') {
                            navigation.navigate('CartScreen')
                        }
                        else {
                            updateButtonText();
                            setDatatoStorage(item);
                            showToast(item.name, 'Add to Cart');
                        }
                    }}
                />


                <AppButton label={'Buy Now'} containerStyle={styles.outLineButton} />
                <ProductSpecCard Item={item} />
                <ProductSpecification Heading={'Specification & Highlight'} />
                <Separator />
                <ProductSpecification Heading={'Description'} data={Description} />

                <Banner Image={Images.iPad} imgStyle={{ width: wp(100), height: hp(52.71) }} />
                <Banner Image={Images.ProductPerformance} imgStyle={{ width: wp(100), height: hp(65) }} />
                <Banner Image={Images.iPad2} imgStyle={{ width: wp(100), height: hp(67) }} />
                <ProductHeader title={'Frequently Bought Together'} />
                <ProductList
                    Data={productCollection}
                    isExpress
                    TotalPrice
                    isCheckBox
                />
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={styles.infoView}>
                        <Image source={Images.InfoIcon} style={{ height: 15, width: 15 }} />
                        <Text style={[styles.infoMsg, { fontSize: 12 }]}>These items are dispatched from and sold by different sellers</Text>
                    </View>
                    <Text style={[styles.infoMsg, { margin: 10 }]}>{`Total Price : $ 5,00,000`}</Text>
                </View>

                <AppButton containerStyle={{ backgroundColor: Colors.LightGray }} label={'Add Items to Cart'} labelStyle={{ color: Colors.themeColor }} />
                <UserReview Item={item} />
                {/* <ProductwithTitle title={'More from Apple'} /> */}
                <ProductHeader title={'More From Apple'} />
                <ProductList
                    Data={productCollection}
                    TotalPrice
                />
            </ScrollView>
            <Toast
                config={toastConfig}
                position="bottom"
                visibilityTime={2000}
                autoHide={true} />

            {/* {scrollBtn && (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.scrollBtnText}>Add to Cart</Text>
                </TouchableOpacity>
            )} */}

        </AppBackground>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    outLineButton: {
        backgroundColor: Colors.YELLOW1,
        borderColor: Colors.YELLOW1,
        marginBottom: hp('2%')
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    innerContainer: {
        alignItems: 'center',
    },
    toastMsgText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5
    },
    toastMsgContainer: {
        height: 60, width: '90%', backgroundColor: Colors.WHITE, flexDirection: 'row', padding: 10, borderRadius: 8, marginHorizontal: 20, alignItems: 'center', gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
    },
    infoMsg: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
    },
    infoView: {
        flexDirection: 'row', gap: 2
    },
    button: {
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // left: 0,

        // padding: 10,
        // backgroundColor: Colors.YELLOW1,
        // borderRadius: 5,
        // alignItems: 'center',
        // // justifyContent: 'center',
        // flex: 1,
        // width: 100,
        // borderRadius: 24

        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Colors.YELLOW1,
        // padding: 10,
        borderRadius: 24,
        // width: 100,
    },
    scrollBtnText: {
        backgroundColor: Colors.YELLOW1, padding: 10, borderRadius: 24, color: Colors.WHITE
    }
})

