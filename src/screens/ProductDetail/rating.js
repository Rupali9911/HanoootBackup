import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import fonts from '../../constant/fonts'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colors from '../../constant/Colors';
import { translate } from '../../utility';
import { getFonts } from '../utils';


const UserRating = (props) => {
    // const Rating = [1, 2, 3, 4, 5]
    return (
        <>
            {/* <View style={styles.container}>
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
            </View> */}
            <View style={styles.container}>
                {
                    props.isRatingText ? <Text style={styles.rating}>
                        {props.startingValue}
                    </Text> : null
                }
                <View>
                    <Rating
                        type='custom'
                        readonly={true}
                        startingValue={props.startingValue}
                        ratingCount={5}
                        imageSize={10}
                        ratingColor={Colors.YELLOW}
                        ratingBackgroundColor={Colors.GRAY}

                    />
                    {
                        props.reviewText ? <Text style={styles.review}>
                            {`${translate('common.basedon')} ${props.reviewText} ${translate('common.ratings')}`}
                        </Text> : null
                    }
                </View>
            </View>
        </>
    )
}

export default UserRating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    rating: {
        fontFamily: getFonts.BOLD,
        fontSize: 28
    },
    review: {
        fontFamily: getFonts.MEDIUM, fontSize: 12
    }

})