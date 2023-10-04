import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import ProductHeader from './ProductHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { showErrorToast } from '../../../Components/universal/Toast'
import { AddtoCartAPICall } from '../../../services/apis/CartAPI'
import { showInfoToast } from '../../../Components/universal/Toast'
import { translate } from '../../../utility'
import { updateTopPicksCart } from '../../Store/actions/HomeAction'
import { formattedPrice, getFonts } from '../../utils'
import ImageRenderer from '../../../Components/universal/ImageRender'

const TopPicks = (props) => {
  const Data = props.Data;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer.userData);
  const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

  const onAddtoCartPress = async (isCartedItem, productId, topPicksId) => {
    try {
      if (!isCartedItem) {
        const response = await AddtoCartAPICall(productId, 1)
        if (response?.success) {
          setTimeout(() => {
            dispatch(updateTopPicksCart({ TopPicks: topPicksId, ProductId: productId }))
            showInfoToast('SUCCESS', selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)
          }, 1000);
        }
        else {
          showErrorToast()
        }
      }
      else if (isCartedItem) {
        navigation.navigate('CartScreen', { screen: true })
      }


    }
    catch (error) {
      console.log('Error from onAddtoCartPress api ', error)
    }
  }



  const renderListItems = (item, index, topPicksId) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.push('ProductDetail', { id: item?.id })}
      >
        <View style={styles.itemImgContainer}>
          {/* <Image source={{ uri: item?.ManagementProduct?.product_image ? item?.ManagementProduct?.product_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }} style={styles.itemImg} /> */}
          <ImageRenderer height={60} width={60} style={styles.itemImg} uri={item?.ManagementProduct?.product_image} />

        </View>
        <View style={{}}>
          <Text numberOfLines={2} style={styles.itemName}>{selectedLanguageItem?.language_id === 0 ? item?.ManagementProduct?.ManagementProductSeo?.product_name : item?.ManagementProduct?.ManagementProductSeo?.product_name_arabic}</Text>
          <Text style={styles.itemPrice}>{`${formattedPrice(item?.ManagementProduct?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
        </View>
        <TouchableOpacity style={styles.cartBtn}
          onPress={
            userData ? () => onAddtoCartPress(item?.ManagementProduct?.isCart, item?.product_id, topPicksId) : props.onTopPicksCartPress}
        >
          <Text style={styles.cartBtnTxt}>{item?.ManagementProduct?.isCart ? translate('common.viewcart') : translate('common.addtocart')}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }


  const keyExtractor = (item, index) => {
    return index;
  };


  const renderItem = ({ item, index }) => {
    const topPicksItem = item
    return (
      <>
        <ProductHeader title={item?.heading} />
        <View style={styles.mainContainer}>
          {/* <Image
            source={{ uri: item?.image_url }}
            style={styles.bannerImg}
          /> */}
          <ImageRenderer height={hp(17.36)} width={wp(86.93)} style={styles.bannerImg} uri={item?.image_url} />
          <View style={styles.container}>
            <View style={styles.headingContainer}>
              <View style={{ width: '60%' }}>
                <Text style={styles.title} numberOfLines={2}>{item?.inner_heading}</Text>
                <Text style={styles.description} numberOfLines={1}>{item?.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.seeAllBtn}
                onPress={() => navigation.navigate('Category')}
              >
                <Text style={styles.seeAllBtnText}>{translate('common.shopnow')}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={item?.TopPicksProducts}
              renderItem={({ item, index }) => renderListItems(item, index, topPicksItem?.id)}
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
  },
  headingContainer: {
    flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingBottom: '2%'
  },
  productContainer: {
    paddingHorizontal: '2%'
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: getFonts.SEMI_BOLD,
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
    fontFamily: getFonts.SEMI_BOLD,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  listContainer: {
    width: wp(25.33),
    // gap: 8,
    marginHorizontal: '1%',
    marginVertical: '2%',
    alignContent: 'center',
    height: hp(25.95),
    maxHeight: hp(25.95),
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
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
    fontFamily: getFonts.MEDIUM,
    fontWeight: 500
  },
  itemPrice: {
    // fontWeight: 700,
    fontFamily: getFonts.BOLD,
    letterSpacing: 0.5
  },
  cartBtn: {
    backgroundColor: Colors.themeColor,
    // padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    height: hp(3.57),
    width: wp(25.33)
  },
  cartBtnTxt: {
    color: Colors.WHITE,
    fontWeight: 600,
    fontFamily: getFonts.MEDIUM,
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
    fontFamily: getFonts.REGULAR,
    fontWeight: 500,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: Colors.GRAY3
  }
})