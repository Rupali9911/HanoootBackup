// import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import AppBackground from '../Components/AppBackground'
// import AppHeader from '../Components/AppHeader'
// import { hp, wp } from '../../constant/responsiveFunc'
// import fonts from '../../constant/fonts'
// import Colors from '../../constant/Colors'
// import { useNavigation } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { translate } from '../../utility'
// import { capitalizeFirstLetter, getFonts } from '../utils'
// import { SvgUri } from 'react-native-svg';
// import ImageRenderer from '../../Components/universal/ImageRender'


// const ViewMoreCategories = (props) => {
//     const ITEMS = props?.route?.params?.item;
//     const TITLE = props?.route?.params?.title;

//     const navigation = useNavigation();

//     const { subCategoryList } = useSelector(state => state.categoryReducer);

//     const { selectedLanguageItem } = useSelector((state) => state.languageReducer);




//     // console.log('ViewMoreCategories : ', ITEMS);

//     const renderItem = ({ item, index }) => {
//         const imageUrl = item?.thumbnail_image ? item?.thumbnail_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png';
//         const extension = imageUrl.split('.').pop().toLowerCase();

//         return (
//             <TouchableOpacity style={styles.itemContainer}
//                 onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: selectedLanguageItem?.language_id === 0 ? item?.name : item?.name_arabic })}
//             >
//                 {/* {
//                     extension === 'svg' ?
//                         <SvgUri
//                             width={wp(13)}
//                             height={hp(6)}
//                             uri={imageUrl}
//                         />
//                         :
//                         <Image
//                             source={{ uri: imageUrl }}
//                             style={styles.image}
//                         />
//                 } */}
//                 <ImageRenderer height={hp(6)} width={wp(13)} style={styles.image} uri={item?.thumbnail_image} />
//                 {
//                     item?.name &&
//                     <Text numberOfLines={2}
//                         style={styles.subCategoryText}
//                     >{selectedLanguageItem?.language_id === 0 ? item?.name : item?.name_arabic}</Text>
//                 }
//             </TouchableOpacity >
//         );
//     }


//     return (
//         <AppBackground>
//             <AppHeader showBackButton placeholderText={translate('common.whatLookingFor')} />
//             <Text style={styles.title}>{selectedLanguageItem?.language_id === 0 ? capitalizeFirstLetter(ITEMS?.name) : ITEMS?.name_arabic}</Text>
//             <View style={styles.centerView}>
//                 <FlatList
//                     data={ITEMS?.children}
//                     keyExtractor={(item, index) => index.toString()}
//                     numColumns={4}
//                     renderItem={renderItem}
//                 />
//             </View>
//         </AppBackground>
//     )
// }

// export default ViewMoreCategories

// const styles = StyleSheet.create({
//     itemContainer: {
//         width: wp(21),
//         backgroundColor: Colors.WHITE,
//         margin: 5.5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 6,
//         paddingVertical: '5%',
//         paddingHorizontal: '2%',
//         shadowColor: 'rgba(0, 0, 0, 0.03)',
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.9,
//         shadowRadius: 0.30,
//         elevation: 7,
//         gap: 10
//     },
//     image: {
//         height: hp(6),
//         width: wp(13),
//         resizeMode: 'contain'
//     },
//     title: {
//         fontFamily: getFonts.SEMI_BOLD,
//         fontWeight: 600,
//         letterSpacing: 0.5,
//         textAlign: 'left',
//         margin: '5%',
//         fontSize: 16
//     },
//     centerView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     subCategoryText: {
//         fontFamily: getFonts.REGULAR,
//         fontWeight: 500,
//         lineHeight: 15,
//         letterSpacing: 0.5,
//         textAlign: 'center'
//     },
// })






import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { translate } from '../../utility'
import { capitalizeFirstLetter, getFonts } from '../utils'
import { SvgUri } from 'react-native-svg';
import ImageRenderer from '../../Components/universal/ImageRender'


const ViewMoreCategories = (props) => {
    const ITEMS = props?.route?.params?.item;
    const TITLE = props?.route?.params?.title;
    const SECTION = props?.route?.params?.section;

    const navigation = useNavigation();

    const { subCategoryList } = useSelector(state => state.categoryReducer);

    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);




    // console.log('ViewMoreCategories : ', ITEMS);

    const renderItem = ({ item, index }) => {
        const imageUrl = item?.thumbnail_image ? item?.thumbnail_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png';
        const extension = imageUrl.split('.').pop().toLowerCase();

        return (
            <TouchableOpacity style={styles.itemContainer}
                onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: SECTION == 1 ? item?.ManagementBrand?.name : item?.name })}
            >
                {/* {
                    extension === 'svg' ?
                        <SvgUri
                            width={wp(13)}
                            height={hp(6)}
                            uri={imageUrl}
                        />
                        :
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                } */}
                <ImageRenderer height={hp(6)} width={wp(13)} style={styles.image} uri={SECTION == 1 ? item?.ManagementBrand?.thumbnail_image : item?.thumbnail_image} />
                {
                    // item?.ManagementBrand?.name &&
                    <Text numberOfLines={2}
                        style={styles.subCategoryText}
                    >{SECTION == 1 ? item?.ManagementBrand?.name : item?.name}</Text>
                }
            </TouchableOpacity >
        );
    }


    return (
        <AppBackground>
            <AppHeader showBackButton placeholderText={translate('common.whatLookingFor')} />
            <Text style={styles.title}>{TITLE}</Text>
            <View style={styles.centerView}>
                <FlatList
                    data={ITEMS}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    renderItem={renderItem}
                />
            </View>
        </AppBackground>
    )
}

export default ViewMoreCategories

const styles = StyleSheet.create({
    itemContainer: {
        width: wp(21),
        backgroundColor: Colors.WHITE,
        margin: 5.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: '5%',
        paddingHorizontal: '2%',
        shadowColor: 'rgba(0, 0, 0, 0.03)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.9,
        shadowRadius: 0.30,
        elevation: 7,
        gap: 10
    },
    image: {
        height: hp(6),
        width: wp(13),
        resizeMode: 'contain'
    },
    title: {
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'left',
        margin: '5%',
        fontSize: 16
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subCategoryText: {
        fontFamily: getFonts.REGULAR,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
})