import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import Images from '../../../constant/Images'
import fonts from '../../../constant/fonts'
import { ReviewList } from '../../../constant/DemoArray'
import { hp, wp } from '../../../constant/responsiveFunc'
import Rating from '../rating'
import Separator from '../../../constant/Separator'
import ListReview from './ReviewList'
import { ProgressView } from "@react-native-community/progress-view";




const ReviewMainPage = (props) => {
  const { route } = props;
  const [progreeStatus, setProgressStatus] = useState(0.7);


  const progressArr = [
    {
      rate: 5,
      progress: 0.6,
      userRating: 56
    },
    {
      rate: 4,
      progress: 0.5,
      userRating: 86
    },
    {
      rate: 3,
      progress: 0.8,
      userRating: 23
    },
    {
      rate: 2,
      progress: 0.2,
      userRating: 55
    },
    {
      rate: 1,
      progress: 0.3,
      userRating: 36
    }
  ]




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


  // const arrtemp = ReviewList.slice(0,2)

  const UserProgress = () => {
    return (
      progressArr.map((item, i) => {
        return (
          <View style={styles.progressViewCont} key={i}>
            <View style={{ flexDirection: 'row', gap: 3 }}>
              <Text>{item.rate}</Text>
              <Image source={Images.star} style={{ height: 15, width: 15 }} />
            </View>

            <View style={{ width: wp(70) }}>
              <ProgressView
                progressTintColor={Colors.themeColor}
                trackTintColor={Colors.GRAY}
                progress={item.progress}
              />
            </View>

            <View>
              <Text>{`(${item.userRating})`}</Text>
            </View>
          </View>
        )
      })




    );
  }

  return (
    <AppBackground>
      <AppHeader placeholderText={'What are you looking for?'} showBackButton/>
      <ScrollView>
        <View style={styles.ProductView}>
          <Image source={route.params.Product.image} style={{ height: 65, width: 65 }} />
          <View>
            <Text
              style={[styles.productName, {
                color: Colors.PRICEGRAY,
                fontSize: 12
              }]}
            >{'Apple'}</Text>
            <Text style={styles.productName} numberOfLines={2}>{route.params.Product.name}</Text>
          </View>
        </View>


        <View style={styles.mainContainer}>
          {/* <Separator /> */}
          <View style={{marginHorizontal: '5%', marginVertical: '2%'}}>
          <Text style={styles.Heading}>User Reviews</Text>
          <Rating
            RatingReview
            isBottomLine
            ImageStyle={{ height: 15, width: 15 }}
          />
           </View>
         <View style={{
          paddingVertical: '5%', paddingHorizontal: '5%', borderTopColor: Colors.GRAY,
                        borderBottomColor: Colors.GRAY,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        justifyContent: 'center'}}>
          <UserProgress />
          </View>
         

          {/* <View style={{paddingVertical: '4%', paddingHorizontal: '5%', borderTopColor: Colors.GRAY,
                        borderBottomColor: Colors.GRAY,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        justifyContent: 'center'}}> */}
          <Text style={{
            fontFamily: fonts.VisbyCF_Bold,
            lineHeight: 19,
            fontWeight: 700,
            letterSpacing: 0.5,
            marginHorizontal: '5%',
            marginVertical: '2%'
          }}>{`${ReviewList.length} Reviews`}
          </Text>
          {/* </View> */}
          {/* <FlatList
          data={arrtemp}
          renderItem={UserReviewList}
          keyExtractor={keyExtractor}
        /> */}
          <ListReview List={ReviewList} />
          {/* <Separator /> */}
        </View>
      </ScrollView>
    </AppBackground>
  )
}

export default ReviewMainPage;

const styles = StyleSheet.create({
  ProductView: {
    // height: 60, 
    // width: '90%', 
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    //  padding: 10, borderRadius: 8, marginHorizontal: 20, 
    alignItems: 'center', gap: 10,
    padding: 20,
    borderBottomColor: Colors.GRAY,
    borderTopColor: Colors.GRAY,
    // borderWidth: 1
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  productName: {
    fontFamily: fonts.VisbyCF_Demibold,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  mainContainer: {
    // padding: 20,
    // borderTopColor: Colors.GRAY,
    // borderBottomColor: Colors.GRAY,
    // borderWidth: 1

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
  progressViewCont: {
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     marginVertical: '1%'
    
  }
})