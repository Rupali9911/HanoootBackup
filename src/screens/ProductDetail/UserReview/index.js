import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Images from '../../../constant/Images'
import Rating from '../rating'
import Separator from '../../../constant/Separator'
import { ReviewList } from '../../../constant/DemoArray'
import fonts from '../../../constant/fonts'
import { hp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import { useNavigation } from '@react-navigation/native';
import ListReview from './ReviewList'


const UserReview = (props) => {
   
    const navigation = useNavigation();



    return (

        <>
            <View style={styles.mainContainer}>
                {/* <Separator /> */}
                <Text style={styles.Heading}>User Reviews</Text>
                <Rating
                    RatingReview
                    isBottomLine
                    ImageStyle={{ height: 15, width: 15 }}
                />
                <Separator />
                {/* <FlatList
                    data={ReviewList}
                    renderItem={UserReviewList}
                    keyExtractor={keyExtractor}
                    initialNumToRender={2}
                /> */}
                <ListReview List={ReviewList.slice(0,5)} />
                <TouchableOpacity onPress={() => 
                    navigation.navigate('UserReview', {Product: props.Item})
                }>
                    <Text style={styles.ButtonText}>See More</Text>
                </TouchableOpacity>
                {/* <Separator /> */}
            </View>
           
        </>
    )
}

export default UserReview;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderWidth: 1

    },
    Heading: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Demibold,
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