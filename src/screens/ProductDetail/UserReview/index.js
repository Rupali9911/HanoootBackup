import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../../../constant/Images'
import Rating from '../rating'
import Separator from '../../../constant/Separator'
import { ReviewList } from '../../../constant/DemoArray'
import fonts from '../../../constant/fonts'
import { hp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'

const UserReview = () => {
    const starArr = [1, 2, 3, 4, 5]

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderProfileWithName = (item) => {
        return (
            <View style={styles.profileContainer}>
                {item.image ? <Image source={item.image && item.image} style={styles.userProfile} />
                    : <View style={styles.circleImgView}><Text style={styles.circleImgText}>{item.name[0]}</Text></View>}
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Rating />
                </View>
            </View>
        );
    }

    const renderTimeStamp = (item) => {
        return (
            <View>

                <Text style={styles.timeStamp}>6/6/2023</Text>
                <Text style={styles.timeStamp}>45 Days Ago</Text>
            </View>
        );
    }


    const UserReviewList = ({ item, index }) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {renderProfileWithName(item)}
                    {renderTimeStamp(item)}
                </View>
                <View style={{ marginVertical: hp('1%') }}>
                    <Text style={styles.userComment}>{item.comment}</Text>
                </View>
                <Separator />
            </View>
        );
    }

    return (

        <>
            <View style={styles.mainContainer}>
                <Separator />
                <Text style={styles.Heading}>User Reviews</Text>
                <Rating
                    RatingReview
                    isBottomLine
                    ImageStyle={{ height: 15, width: 15 }}
                />
                <Separator />
                <FlatList
                    data={ReviewList}
                    renderItem={UserReviewList}
                    keyExtractor={keyExtractor}
                />
                <TouchableOpacity>
                    <Text style={styles.ButtonText}>See More</Text>
                </TouchableOpacity>
                <Separator />
            </View>
        </>
    )
}

export default UserReview;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,

    },
    Heading: {
        fontWeight: 700,
        fontStyle: fonts.VisbyCF_Demibold,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5,
        // rowGap: 15
        marginVertical: hp('1%')
    },
    profileContainer: {
        flexDirection: 'row', alignItems: 'center', gap: 5
    },
    userProfile: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    userName: {
        fontFamily: fonts.VisbyCF_Demibold,
        lineHeight: 21, letterSpacing: 0.5, fontWeight: 600
    },
    timeStamp: {
        textAlign: 'right', fontFamily: fonts.VisbyCF_Medium,
        fontSize: 12,
        fontWeight: 500,
        color: Colors.GRAY1
    },
    circleImgView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.BLUE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleImgText: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: 500
    },
    userComment: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        lineHeight: 19,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAY1
    },
    ButtonText: {
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Demibold,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.themeColor,
        textAlign: 'right',
        fontSize: 16
    }
})