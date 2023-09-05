// import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
// import React, { useState, useRef } from 'react';
// import Carousels from '../Carousel';
// import { hp, wp } from '../../../constant/responsiveFunc';
// import Colors from '../../../constant/Colors';
// import { BannerData } from '../../../constant/DemoArray';

// const BannerCarousel = () => {

//     const rendeBannerImages = ({ item, index }) => {
//         return (
//             <View style={styles.container} key={index}>
//                 <Image
//                     source={{ uri: item.imgUrl }}
//                     style={styles.image}
//                 />
//             </View>
//         )
//     }

//     return (
//         <View style={{ backgroundColor: Colors.LightGray }}>
//             <Carousels
//                 Data={BannerData}
//                 renderItem={rendeBannerImages}
//                 dotsLength={4}
//                 loop={true}
//                 autoplay={true}
//             />
//         </View>
//     )
// }

// export default BannerCarousel;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: Colors.LightGray,
//     },
//     image: {
//         height: hp(22),
//         width: wp(100),
//     },
// })


import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react'
// import Carousels from '../Carousel';
import { hp, wp } from '../../../constant/responsiveFunc';
import Images from '../../../constant/Images';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';




const MiniSlider = (props) => {

    const { Data } = props;

    console.log('data is here : ', props.Data);



    const isCarousel = useRef(null);



    const renderItem = ({ item, index }) => {
        console.log('images checked : ', item?.thumbnail_image)
        return (
            // <View style={styles.slide}>
            // <Text style={styles.title}>{item.title}</Text>
            <>

                <Image source={{ uri: item?.thumbnail_image }} style={styles.image} key={item?.id} />
                {/* <TouchableOpacity
                    style={styles.arrowButton}
                // onPress={handleLeftArrowPress}
                >
                    <Image
                        source={{ uri: 'https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png' }}
                        style={styles.arrowImage}
                    />
                </TouchableOpacity> */}
            </>
            // </View>
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
            // onPress={() => { isCarousel.snapToNext(); }}
            />

            <Carousel
                // Data={entries}
                // renderItem={renderItem}
                // dotsLength={entries.length}
                // // loop={true}
                // // autoplay={true}
                // sliderWidth={Dimensions.get('window').width}
                // itemWidth={wp(71.79)}
                // renderImageCarousal={renderImageCarousal}

                layout="default"
                data={props.Data?.miniSliderImgs}
                ref={isCarousel}
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
            />

            <ArrowButton
                arrowViewStyle={{ right: 10 }}
            // arrowImgStyle={{ transform: [{ rotate: '180deg' }] }}
            />

        </View>



        // <Carousel
        // layout="default"
        // ref={isCarousel}
        // data={props.Data}
        // // sliderWidth={slideWidth}
        // sliderWidth={props.sliderWidth}
        // itemWidth={props.itemWidth}
        // // itemWidth={slideWidth}

        // // itemWidth={Dimensions.get('window').width}
        // renderItem={props.renderItem}
        // useScrollView={true}
        // inactiveSlideShift={0}
        // onSnapToItem={index => setActiveIndex(index)}
        // activeSlideAlignment={'center'}
        // contentContainerCustomStyle={props.contentContainerCustomStyle}

        // // loop={true}
        // // autoplay={true}
        // {...props}
        // />







        // <View style={styles.container}>
        //     <Carousel
        //         ref={isCarousel}
        //         data={entries}
        //         renderItem={_renderItem}
        //         sliderWidth={viewportWidth}
        //         itemWidth={viewportWidth - 60}
        //         onSnapToItem={(index) => setActiveSlide(index)}
        //         autoplay={true}
        //         autoplayDelay={500}
        //         loop={true}
        //         autoplayInterval={3000}
        //     />
        //     {/* <Pagination
        //         dotsLength={entries.length}
        //         activeDotIndex={activeSlide}
        //         containerStyle={styles.paginationContainer}
        //         dotColor={'rgba(255, 255, 255, 0.92)'}
        //         dotStyle={styles.paginationDot}
        //         inactiveDotColor={'black'}
        //         inactiveDotOpacity={0.4}
        //         inactiveDotScale={0.6}
        //         carouselRef={isCarousel}
        //         tappableDots={!!isCarousel}
        //     /> */}
        // </View>

        //  <ArrowButton
        //             arrowViewStyle={{ left: 10 }}
        //             arrowImgStyle={{ transform: [{ rotate: '180deg' }] }}
        //         />
        //         <Carousels
        //             Data={entries}
        //             renderItem={renderItem}
        //             dotsLength={entries.length}
        //             // loop={true}
        //             // autoplay={true}
        //             sliderWidth={Dimensions.get('window').width}
        //             itemWidth={wp(71.79)}
        //         // renderImageCarousal={renderImageCarousal}
        //         />
        //         <ArrowButton
        //             arrowViewStyle={{ right: 10 }}
        //         // arrowImgStyle={{ transform: [{ rotate: '180deg' }] }}
        //         />
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
        // padding: 10

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
        // transform: -90
    },
})



// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react'

// const BannerCarousel = () => {
//     const [index, setIndex] = useState(0);
//     const images = [
//         'https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg',
//         'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg',
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiU7TJ-Rn03izfhKsO33CM4LFy4XrVmPfDfWor9nbb&s',
//     ];


//     const handleLeftArrowPress = () => {
//         if (index > 0) {
//             setIndex(index - 1);
//         }
//     };

//     const handleRightArrowPress = () => {
//         if (index < images.length - 1) {
//             setIndex(index + 1);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 style={styles.arrowButton}
//                 onPress={handleLeftArrowPress}
//             >
//                 <Image
//                     source={{ uri: 'https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png' }}
//                     style={styles.arrowImage}
//                 />
//             </TouchableOpacity>
//             <Image
//                 source={{ uri: images[index] }}
//                 style={styles.image}
//             />
//             <TouchableOpacity
//                 style={styles.arrowButton}
//                 onPress={handleRightArrowPress}
//             >
//                 <Image
//                     source={{ uri: 'https://www.iconpacks.net/icons/2/free-arrow-right-icon-3098-thumb.png' }}
//                     style={styles.arrowImage}
//                 />
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default BannerCarousel

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     arrowButton: {
//         padding: 10
//     },
//     arrowImage: {
//         width: 20,
//         height: 20
//     },
//     image: {
//         width: 300,
//         height: 300
//     }
// })



// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     StyleSheet,
//     TouchableOpacity,
//     ScrollView,
// } from 'react-native';

// const BannerCarousel = () => {
//     const [images, setImages] = useState([
//         'https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg',
//         'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg',
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiU7TJ-Rn03izfhKsO33CM4LFy4XrVmPfDfWor9nbb&s',

//     ]);
//     const [currentIndex, setCurrentIndex] = useState(0);



//     const scrollRight = () => {
//         setCurrentIndex(currentIndex + 1);
//     };

//     const scrollLeft = () => {
//         setCurrentIndex(currentIndex - 1);
//     };

//     useEffect(() => {
//         if (currentIndex >= images.length) {
//             setCurrentIndex(0);
//         }

//         if (currentIndex < 0) {
//             setCurrentIndex(images.length - 1);
//         }
//     }, [currentIndex]);
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={scrollLeft}>
//                 <Text style={styles.arrowButton}>&lt;</Text>
//             </TouchableOpacity>
//             <ScrollView
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={(e) => {
//                     setCurrentIndex(e.nativeEvent.contentOffset.x / 375);
//                 }}
//                 scrollEventThrottle={16}>
//                 {images.map((image, index) => (
//                     <Image
//                         key={index}
//                         source={{uri: image}}
//                         style={{ width: 375, height: 200 }}
//                     />
//                 ))}
//             </ScrollView>
//             <TouchableOpacity onPress={scrollRight}>
//                 <Text style={styles.arrowButton}>&gt;</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default BannerCarousel

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     arrowButton: {
//         fontSize: 40,
//         marginLeft: 10,
//         marginRight: 10,
//     },
// })