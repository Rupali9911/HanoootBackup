import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Carousels from '../Components/Carousel'
import { ProductImages } from '../../constant/DemoArray'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import ImageRenderer from '../../Components/universal/ImageRender'

const ProductImageCarousel = (props) => {
    // console.log('props?.data.length : ', props?.data.length, props?.data)

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 10 }} key={index}>
                {/* <Image
                        source={{uri: item}}
                        style={styles.image}
                    /> */}
                <ImageRenderer height={hp(25)} width={wp(55)} style={styles.image} uri={item} />
            </View> 
        );
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Carousels
                Data={props?.data}
                renderItem={renderItem}
                dotsLength={props?.data?.length}
                loop={true}
                autoplay={true}
                sliderWidth={wp(55)}
                itemWidth={wp(55)}
            />
        </View>
    )
}

export default ProductImageCarousel;

const styles = StyleSheet.create({
    image: {
        height: hp(25),
        width: wp(55),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})