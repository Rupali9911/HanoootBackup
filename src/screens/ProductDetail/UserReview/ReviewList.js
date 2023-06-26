import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import Images from '../../../constant/Images';
import Rating from '../rating';
import Separator from '../../../constant/Separator';

const ListReview = (props) => {

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
                <Separator />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%',  }}>
                    {renderProfileWithName(item)}
                    {renderTimeStamp(item)}
                </View>
                <View style={{ marginVertical: hp('1%'),  paddingHorizontal: '5%' }}>
                    <Text style={styles.userComment}>{item.comment}</Text>
                </View>
                
            </View>
        );
    }

    return (
        <FlatList
            data={props.List}
            renderItem={UserReviewList}
            keyExtractor={keyExtractor}
        />
    )
}

export default ListReview;

const styles = StyleSheet.create({
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
})