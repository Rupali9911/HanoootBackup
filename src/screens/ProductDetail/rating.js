import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import fonts from '../../constant/fonts'

const Rating = (props) => {
    const Rating = [1, 2, 3, 4, 5]
    return (
        <>
            <View style={styles.container}>
                {
                    props.RatingReview ? <Text style={styles.ratingOutofFive}>
                        4.9
                    </Text> : null
                }

                <View style={{ rowGap: 5 }}>
                    <View style={{ flexDirection: 'row', gap: 2}}>
                        {Rating.map((item, i) => {
                            return <Image source={Images.star} style={[styles.ratingImg, props.ImageStyle]} key={i}/>;
                        })}
                    </View>

                    {
                        props.isBottomLine ? <Text style={styles.bottomLine}>
                            Based on 79 Ratings
                        </Text> : null
                    }

                </View>
            </View>
        </>
    )
}

export default Rating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    ratingOutofFive: {
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 28
    },
    ratingImg: {
        height: 10, width: 10, resizeMode: 'contain'
    },
    bottomLine: {
        fontFamily: fonts.VisbyCF_Medium, fontSize: 12
    }

})