import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import Images from '../../../constant/Images'
import ProductHeader from './ProductHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { showErrorToast } from '../../../Components/universal/Toast'




const TopPicks = (props) => {
  const Data = props.Data;
  const navigation = useNavigation();

  const userData = useSelector((state) => state.userReducer.userData);



  console.log('TopPicks', Data)


  const renderListItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.push('ProductDetail', { id: item?.id })}
      >
        <View style={styles.itemImgContainer}>
          <Image source={{ uri: item?.ManagementProduct?.product_image ? item?.ManagementProduct?.product_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }} style={styles.itemImg} />
        </View>
        <View style={{ gap: 18 }}>
          <Text numberOfLines={2} style={styles.itemName}>{item?.ManagementProduct?.title}</Text>
          <Text style={styles.itemPrice}>$ {item?.ManagementProduct?.ManagementProductPricing?.hanooot_price}</Text>
        </View>
        <TouchableOpacity style={styles.cartBtn}
          onPress={() => userData ? onAddtoCartPress(item?.isCart, item?.id) : showErrorToast('For all your shopping needs', 'Please Login First')}
        >
          <Text style={styles.cartBtnTxt}>{item?.ManagementProduct?.isCart ? 'View Cart' : 'Add to Cart'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  const keyExtractor = (item, index) => {
    return index;
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <ProductHeader title={item?.heading} />
        <View style={styles.mainContainer}>
          <Image
            source={{ uri: item?.image_url }}
            style={styles.bannerImg}
          />
          <View style={styles.container}>
            <View style={styles.headingContainer}>
              <View>
                <Text style={styles.title} numberOfLines={2}>{item?.inner_heading}</Text>
                <Text style={styles.description} numberOfLines={2}>{item?.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.seeAllBtn}
                onPress={() => navigation.navigate('Category')}
              >
                <Text style={styles.seeAllBtnText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={item?.TopPicksProducts}
              renderItem={renderListItems}
              keyExtractor={keyExtractor}
              numColumns={3}
              scrollEnabled={false}
              style={{ alignItems: 'center' }}
            />
          </View>
        </View>
      </>
    )
  }

  return (
    // <>
    //   <ProductHeader title={props.Title} />
    //   <View style={styles.mainContainer}>
    //     <Image
    //       source={{ uri: props.bannerImage }}
    //       style={styles.bannerImg}
    //     />
    //     <View style={styles.container}>
    //       <View style={styles.headingContainer}>
    //         <View>
    //           <Text style={styles.title} numberOfLines={2}>PC Gaming Top Picks</Text>
    //           <Text style={styles.description} numberOfLines={2}>Find your passion</Text>
    //         </View>
    //         <TouchableOpacity style={styles.seeAllBtn}>
    //           <Text style={styles.seeAllBtnText}>Shop Now</Text>
    //         </TouchableOpacity>
    //       </View>
    //       <FlatList
    //         data={[1, 2, 3]}
    //         renderItem={renderItem}
    //         keyExtractor={keyExtractor}
    //         numColumns={3}
    //         scrollEnabled={false}
    //         contentContainerStyle={{ alignItems: 'center' }}
    //       />
    //     </View>
    //   </View>
    // </>
    <>
      <View >
        <FlatList
          data={Data?.topPicks}
          renderItem={renderItem}
          keyExtractor={keyExtractor}

        />
      </View>
    </>
  )
}

export default TopPicks

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  container: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: wp(86.67),
    paddingVertical: '5%',
    // backgroundColor: 'green',
    // alignItems: 'center'
  },
  headingContainer: {
    flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingBottom: '2%'
  },
  productContainer: {
    // alignItems: 'center'
    // alignItems: 'center', justifyContent: 'center'
    // justifyContent: 'center',
    paddingHorizontal: '2%'
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: fonts.VisbyCF_Demibold,
    letterSpacing: 0.5,
    textAlign: 'left'
  },
  seeAllBtn: {
    width: wp(29.60),
    height: 31,
    borderColor: Colors.themeColor,
    borderWidth: 1,
    padding: 6,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllBtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.themeColor,
    fontFamily: fonts.VisbyCF_Demibold,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  listContainer: {
    width: wp(25.33),
    gap: 8,
    marginHorizontal: '1%',
    marginVertical: '2%',
    alignContent: 'center'
  },
  itemImgContainer: {
    height: hp(11.70),
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAYRGBA,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  itemImg: {
    height: 60,
    width: 60,
    resizeMode: 'contain'
  },
  itemName: {
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: fonts.VisbyCF_Medium,
    fontWeight: 500
  },
  itemPrice: {
    fontWeight: 700,
    fontFamily: fonts.VisbyCF_Bold,
    letterSpacing: 0.5
  },
  cartBtn: {
    backgroundColor: Colors.themeColor,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    height: hp(3.57),
    width: wp(25.33)
  },
  cartBtnTxt: {
    color: Colors.WHITE,
    fontWeight: 600,
    fontFamily: fonts.VisbyCF_Medium,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: 12
  },
  bannerImg: {
    height: hp(17.36),
    width: wp(86.93),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover'
  },
  description: {
    fontFamily: fonts.VISBY_CF_REGULAR,
    fontWeight: 500,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: Colors.GRAY3
  }
})