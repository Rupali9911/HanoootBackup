import { StyleSheet, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { hp } from '../../constant/responsiveFunc';
// import Colors from '../../../constant/Colors';
// import { hp } from '../../../constant/responsiveFunc';


const Carousels = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isCarousel = useRef(null);

    // const data = [
    //     {
    //         imgUrl: 'https://cdn.shopify.com/s/files/1/0674/0010/6257/files/banner1.png',
    //     },
    //     {
    //         imgUrl: "https://png.pngtree.com/template/20220330/ourmid/pngtree-black-gold-wind-high-end-simple-watch-banner-image_908201.jpg",
    //     },
    //     {
    //         imgUrl: "https://png.pngtree.com/template/20220330/ourmid/pngtree-2018-business-watch-banner-poster-template-image_909699.jpg",
    //     },
    //     {
    //         imgUrl: "https://cdn.shopify.com/s/files/1/0074/7402/0405/collections/Casioak_Banner.png",
    //     }

    // ];

    // const _renderItem = ({ item, index }) => {
    //     return (
    //         <View style={styles.container} key={index}>
    //             <Image
    //                 source={{ uri: item.imgUrl }}
    //                 style={styles.image}
    //             />
    //         </View>
    //     )
    // }
    return (
        <>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={props.Data}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                renderItem={props.renderItem}
                useScrollView={true}
                inactiveSlideShift={0}
                onSnapToItem={index => setActiveIndex(index)}
                activeSlideAlignment={'center'}
                contentContainerCustomStyle={props.contentContainerCustomStyle}
                
            // loop={true}
            // autoplay={true}
            {...props}
            />
            <Pagination
                dotsLength={props.dotsLength}
                activeDotIndex={activeIndex}
                carouselRef={isCarousel}
                dotStyle={{
                    marginTop: -100,
                    width: 15,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#FEC350',
                }}
                dotContainerStyle={{height: 0}}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: '#D1D8DD',
                    width: 10
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </>
    )
}

export default Carousels;

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: '#F5F5F5',
    // },
    // image: {
    //     height: hp(20),
    //     width: '100%',
    // },
})