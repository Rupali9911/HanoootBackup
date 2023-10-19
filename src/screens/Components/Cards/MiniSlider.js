import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import React, { useRef } from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import Images from '../../../constant/Images';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import ImageRenderer from '../../../Components/universal/ImageRender';
import { useNavigation } from '@react-navigation/native';




const MiniSlider = (props) => {
    var isCarousel = useRef(null);
    const navigation = useNavigation();

    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    const renderItem = ({ item, index }) => {
        const externalUrl = item?.product_link
        // console.log('externalUrl: ', item?.product_link ? 'true' : 'false')
        return (
            // <Image source={{ uri: item?.image_url }} style={styles.image} key={item?.id} />
            // <ImageRenderer height={20} width={20} />
            // width: wp(71.79),
            //     height: hp(24.63),
            <TouchableOpacity onPress={() => { item?.product_link ? (console.log('pressed'), Linking.openURL(item?.product_link)) : console.log('no url') }}>
                <ImageRenderer height={hp(24.63)} width={wp(71.79)} style={styles.image} uri={item?.image_url} />
            </TouchableOpacity>

        );
    }


    const ArrowButton = (props) => {
        return (
            <TouchableOpacity
                style={[styles.arrowButton, props.arrowViewStyle]}
                onPress={props.onPress}
            >
                <Image
                    source={Images.ForwardIcon}
                    style={[styles.arrowImage, props.arrowImgStyle]}
                />
            </TouchableOpacity>
        )
    }


    return (
        <View>
            <ArrowButton
                arrowViewStyle={{ left: 10 }}
                arrowImgStyle={{ transform: [{ rotate: selectedLanguageItem?.language_id === 0 ? '180deg' : '0deg' }] }}
                onPress={() => { selectedLanguageItem?.language_id === 0 ? isCarousel.snapToPrev() : isCarousel.snapToNext() }}
            />
            <Carousel
                layout="default"
                data={props.Data?.miniSliderImgs}
                ref={(carousel) => { isCarousel = carousel; }}
                loop={true}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={wp(71.79)}
                renderItem={renderItem}
                useScrollView={true}
                inactiveSlideShift={0}
                activeSlideAlignment={'center'}
                enableMomentum={false}
                hasParallaxImages={false}
                lockScrollWhileSnapping={true}
                scrollEnabled={false}
            />

            <ArrowButton
                arrowViewStyle={{ right: 10 }}
                onPress={() => { selectedLanguageItem?.language_id === 0 ? isCarousel.snapToNext() : isCarousel.snapToPrev() }}
                arrowImgStyle={{ transform: [{ rotate: selectedLanguageItem?.language_id === 0 ? '0deg' : '180deg' }] }}

            />
        </View>
    )
}

export default MiniSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    slide: {
        paddingHorizontal: 10
    },
    image: {
        width: wp(71.79),
        height: hp(24.63),
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: hp(3)
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    arrowButton: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: 'white',
        position: 'absolute',
        top: hp(24.63) / 2,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowImage: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },
})