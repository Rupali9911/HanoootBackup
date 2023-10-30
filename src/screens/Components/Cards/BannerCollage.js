// // import { StyleSheet, View, Image } from 'react-native'
// // import React from 'react'
// // import { hp, wp } from '../../../constant/responsiveFunc'
// // import Carousels from '../Carousel'
// // import ImageRenderer from '../../../Components/universal/ImageRender'

// // const BannerCollage = (props) => {
// //     const Data = props.Data;

// //     const slideWidth = wp(86.93);

// //     const renderItem = ({ item, index }) => {
// //         return (
// //             // <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(56.99), alignSelf: 'center', borderRadius: 10, resizeMode: 'contain' }} />
// //             <ImageRenderer height={hp(56.99)} width={wp(86.93)} style={{ alignSelf: 'center', borderRadius: 10 }} uri={item?.image_url} resizeMode={'contain'} key={index} />
// //         );
// //     }


// //     return (
// //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(3) }}>
// //             {/* <Image source={{ uri: Data?.largeBanner[0]?.image_url }} style={{ width: wp(86.93), height: hp(24.94), resizeMode: 'cover', marginBottom: '2%', borderRadius: 10 }} /> */}
// //             <ImageRenderer height={hp(24.94)} width={wp(86.93)} style={{ marginBottom: '2%', borderRadius: 10 }} uri={Data?.largeBanner[0]?.image_url} resizeMode={'cover'} />

// //             <Carousels
// //                 Data={Data?.sliderBanner}
// //                 renderItem={renderItem}
// //                 dotsLength={Data?.sliderBanner.length}
// //                 loop={true}
// //                 autoplay={true}
// //                 sliderWidth={slideWidth}
// //                 itemWidth={slideWidth}
// //                 dotStyle={{ bottom: 30 }}

// //                 containerStyle={{ paddingVertical: '1%' }}
// //                 enablePagination
// //             />
// //             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
// //                 <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={Data?.smallBanner[0]?.image_url} resizeMode={'cover'} />

// //                 <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={Data?.smallBanner[1]?.image_url} resizeMode={'cover'} />

// //                 {/* <Image source={{ uri: Data?.smallBanner[0]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} />
// //                 <Image source={{ uri: Data?.smallBanner[1]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} /> */}
// //             </View>
// //         </View>
// //     )
// // }

// // export default BannerCollage

// // const styles = StyleSheet.create({})




// import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
// import React, { useEffect } from 'react'
// import MiniSlider from './MiniSlider';
// import Carousel, { Pagination } from 'react-native-snap-carousel';


// const BannerCollage = (props) => {
//     const BannerData = props.Data;


//     const miniSliderImages = [];
//     const largeBannerImages = [];

//     console.log('BannerData', BannerData)

//     useEffect(() => {
//         try {

//         } catch (error) {

//         }
//     }, [])
//     return (
//         // BannerData && BannerData?.map((val, idx) => {
//         //     const bannerTitle = val?.bannerObj?.tittle;


//         //     bannerTitle?.includes('mini_slider')
//         //         ?
//         //         <Text>{'bannerTitle'}</Text>
//         //         :
//         //         <Text>{'no data'}</Text>
//         // })


//         <ScrollView contentContainerStyle={styles.container}>
//             {
//                 BannerData && BannerData?.map((item, index) => {
//                     const title = item.bannerObj.tittle;
//                     const bannerArray = item.bannerObj[title]; // Get the array of images

//                     console.log('titletitle:', bannerArray)


//                     if (title.includes('mini_slider')) {
//                         miniSliderImages.push(...bannerArray);
//                     } else if (title.includes('large_banner')) {
//                         largeBannerImages.push(...bannerArray);
//                     }


//                     return (
//                         <View key={index} style={styles.bannerContainer}>
//                             <Text style={styles.bannerTitle}>{title}</Text>
//                             {bannerArray?.length > 0 && bannerArray.map((image, imageIndex) => {

//                                 // console.log('images.map: ', image)
//                                 // return <Image
//                                 //     key={imageIndex}
//                                 //     source={{ uri: image?.image_url }}
//                                 //     style={title.includes('mini_slider') ? styles.fullWidthImage : styles.largeBannerImage}
//                                 // />


//                                 return <View style={styles.carouselContainer}>
//                                     <Carousel
//                                         layout="default"
//                                         data={miniSliderImages}
//                                         renderItem={({ item }) => (
//                                             <Image source={{ uri: item.image_url }} style={styles.carouselImage} />
//                                         )}
//                                         sliderWidth={300}
//                                         itemWidth={300}
//                                         loop={true}
//                                     />
//                                 </View>
//                             })
//                             }
//                         </View>
//                     );
//                 })

//             }
//         </ScrollView>
//     )
// }

// export default BannerCollage

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         // flexDirection: 'row', // Arrange elements horizontally

//     },
//     bannerContainer: {
//         marginVertical: 10,
//     },
//     bannerTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     fullWidthImage: {
//         width: '100%',
//         aspectRatio: 16 / 9, // Set the aspect ratio for the mini_slider images
//     },
//     largeBannerImage: {
//         width: 100,
//         height: 100,
//     },
//     carouselContainer: {
//         marginTop: 10,
//     },
//     carouselImage: {
//         width: 300,
//         height: 200, // Adjust the height as needed for your carousel
//     },
// })



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const BannerCollage = () => {
//     return (
//         <View>
//             <Text>BannerCollage</Text>
//         </View>
//     )
// }

// export default BannerCollage

// const styles = StyleSheet.create({})



import React, { useRef } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Linking, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import ImageRenderer from '../../../Components/universal/ImageRender';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../../constant/responsiveFunc';
import Images from '../../../constant/Images';
import MiniSlider from './MiniSlider';
import ExtraLargeBanner from './ExtraLargeBanner';
import LargeBanner from './LargeBanner';
import SliderBanner from './SliderBanner';
import SmallBanner from './SmallBanner';

const jsonData = { /* Your JSON data goes here */ };

const BannerCollage = (props) => {
    const BannerData = props.Data;

    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

    var isCarousel = useRef(null);

    // const miniSliderImages = [];
    const largeBannerImages = [];
    const extraLargeBannerImages = [];
    const sliderBannerImages = [];
    const smallBannerImages = [];

    BannerData && BannerData.forEach((item) => {
        const title = item?.bannerObj?.tittle;
        const images = item?.bannerObj[title];

        console.log('titletitletitle: ', title, images)

        // if (title.includes('mini_slider')) {
        //     if (images?.length > 0) {
        //         miniSliderImages.push(images);
        //     }
        // }
        if (title.includes('extra_large')) {
            if (images?.length > 0) {
                extraLargeBannerImages.push(images);
            }
        }
        else if (title.includes('large_banner')) {
            if (images?.length > 0) {
                largeBannerImages.push(images);
            }
        }
        else if (title.includes('slider_banner')) {
            if (images?.length > 0) {
                sliderBannerImages.push(images);
            }
        }
        else if (title.includes('small_banner')) {
            if (images?.length > 0) {
                smallBannerImages.push(images);
            }
        }
    });


    const renderItem = ({ item, index }) => {
        const externalUrl = item?.product_link
        return (
            <TouchableOpacity onPress={() => { item?.product_link ? (console.log('pressed'), Linking.openURL(item?.product_link)) : console.log('no url') }}>
                <ImageRenderer height={hp(24.63)} width={wp(71.79)} style={styles.image} uri={item?.image_url} />
            </TouchableOpacity>

        );
    }

    return (

        < View >
            {/* <MiniSlider Data={miniSliderImages} /> */}
            <LargeBanner Data={largeBannerImages} />
            <SliderBanner Data={sliderBannerImages} />
            <SmallBanner Data={smallBannerImages} />
            <ExtraLargeBanner Data={extraLargeBannerImages} />

        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    carouselContainer: {
        // marginTop: 10,
    },
    carouselImage: {
        width: 300,
        height: 200, // Adjust the height as needed for your carousel
    },
    columnContainer: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    largeBannerImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
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
});

export default BannerCollage;