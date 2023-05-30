import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const Carousels = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isCarousel = useRef(null);

    const data = [
        {
            imgUrl: 'https://cdn.shopify.com/s/files/1/0674/0010/6257/files/banner1.png',
        },
        {
            imgUrl: "https://png.pngtree.com/template/20220330/ourmid/pngtree-black-gold-wind-high-end-simple-watch-banner-image_908201.jpg",
        },
        {
            imgUrl: "https://png.pngtree.com/template/20220330/ourmid/pngtree-2018-business-watch-banner-poster-template-image_909699.jpg",
        },
        {
            imgUrl: "https://cdn.shopify.com/s/files/1/0074/7402/0405/collections/Casioak_Banner.png",
        }

    ];

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.container} key={index}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                />
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: Colors.LightGray }}>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                renderItem={_renderItem}
                useScrollView={true}
                inactiveSlideShift={0}
                onSnapToItem={index => setActiveIndex(index)}
                activeSlideAlignment={'center'}
                loop={true}
                autoplay={true}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 15,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#FEC350',
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: '#D1D8DD',
                    width: 10
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

export default Carousels;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        // borderRadius: 8,
        // width: '100%',
        // // height: 50
        // paddingBottom: 40,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
    image: {
        // width: ITEM_WIDTH,
        height: 200,
        width: '100%',
        // resizeMode: 'contain'
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})