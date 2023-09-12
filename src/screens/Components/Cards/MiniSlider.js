import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import Images from '../../../constant/Images';
import Carousel from 'react-native-snap-carousel';




const MiniSlider = (props) => {
    var isCarousel = useRef(null);

    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item?.thumbnail_image }} style={styles.image} key={item?.id} />
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
                arrowImgStyle={{ transform: [{ rotate: '180deg' }] }}
                onPress={() => { isCarousel.snapToPrev() }}
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
                onPress={() => { isCarousel.snapToNext() }}
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