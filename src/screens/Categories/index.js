// import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
// import React, { useEffect, useState, useCallback } from 'react'
// import AppBackground from '../Components/AppBackground'
// import AppHeader from '../Components/AppHeader'
// import { hp, wp } from '../../constant/responsiveFunc'
// import Colors from '../../constant/Colors'
// import fonts from '../../constant/fonts'
// import Images from '../../constant/Images'
// import { useNavigation } from '@react-navigation/native'
// import { FeedArray } from '../../constant/DemoArray'
// import { categoryLoadingStart, getCategoryList, categoryPageChange, getSubCategoryList } from '../Store/actions/categoryAction'
// import { useSelector, useDispatch } from 'react-redux';
// import Loader from '../../constant/Loader'

// const Category = () => {
//     const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
//     const [showAll, setShowAll] = useState(false);
//     const [expanded, setExpanded] = useState(false);
//     const [subCategoryIndex, setSubCategoryIndex] = useState(null);
//     const [selectedFeedItems, setSelectedFeedItems] = useState({
//         "category": "Popular",
//         "items": [
//             {
//                 "products": [
//                     {
//                         "name": "Apple",
//                         "image": 'https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45',
//                     },
//                     {
//                         "name": "IOS",
//                         "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
//                     },
//                     {
//                         "name": "Android",
//                         "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
//                     },
//                     {
//                         "name": "Cable",
//                         "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
//                     },
//                     {
//                         "name": "Holder",
//                         "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
//                     }
//                 ]
//             },
//         ]
//     });
//     const { isCatgListLoading, categoryList, subCategoryList } = useSelector(state => state.categoryReducer);
//     const dispatch = useDispatch();

//     const navigation = useNavigation();


//     // console.log('final page pe check krri hu  : ', isCatgListLoading, categoryList?.categories?.children)
//     useEffect(() => {
//         // try {
//         //     const categoryList = await getCategoryList();
//         //     console.log('Useeffect API call : ', categoryList)

//         // }
//         // catch (error) {
//         //     console.log('Error from get category list api', error)
//         // }


//         dispatch(categoryLoadingStart());
//         getData(1);
//         dispatch(categoryPageChange(1));
//     }, [])

//     const getData = useCallback(page => {
//         dispatch(getCategoryList(1, 10));
//     }, []);




//     const Categories = ({ item, index }) => {
//         // console.log('cehck items : ', item, index)
//         return (
//             <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
//                 onPress={() => {
//                     setSelectedFeedIndex(index)
//                     setSelectedFeedItems(item)
//                     dispatch(getSubCategoryList(item))
//                 }}
//             >
//                 <Text
//                     style={styles.categoryText(selectedFeedIndex, index)}
//                     numberOfLines={2}>
//                     {item?.name.toUpperCase()}
//                 </Text>
//             </TouchableOpacity>
//         );
//     }


//     const ListView = (props) => {
//         return (
//             <FlatList
//                 data={props.data}
//                 renderItem={props.renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 {...props}
//             />
//         );
//     }

//     const toggleExpand = (index) => {
//         setExpanded(!expanded);
//         setSubCategoryIndex(index);

//     };

//     const SubCategoriesTitle = (props) => {
//         return (
//             <TouchableOpacity style={styles.rowContainer} onPress={() => toggleExpand(props.index)}>
//                 <Text
//                     style={styles.subCategoryTitle}
//                 >{props.title}</Text>
//                 <View>
//                     {expanded && subCategoryIndex === props.index ? (
//                         <Image source={Images.ForwardIcon} style={[styles.arrowImgStyle, { transform: [{ rotate: '90deg' }] }]} />
//                     ) : (
//                         <Image source={Images.ForwardIcon} style={styles.arrowImgStyle} />
//                     )}
//                 </View>
//             </TouchableOpacity>
//         );
//     }

//     const SubCategoryListItems = (props) => {
//         return (
//             <>
//                 <Image
//                     source={{ uri: props.image }}
//                     style={styles.image}
//                 />
//                 {
//                     props.name &&
//                     <Text numberOfLines={2}
//                         style={styles.subCategoryText}
//                     >{props.name}</Text>
//                 }
//             </>
//         )
//     }

//     const ViewMoreButton = (props) => {
//         return (
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('ViewMoreCategories', { item: props.navigation })}
//             >
//                 <Text numberOfLines={2}
//                     style={[styles.subCategoryText, { color: Colors.themeColor }]}
//                 >{'View More'}</Text>
//             </TouchableOpacity>
//         );
//     }


//     const RightComponentList = (subCategory, idx) => {
//         return (
//             <>
//                 {subCategory?.name && <SubCategoriesTitle title={subCategory?.name} index={idx} />}

//                 {/* {expanded && subCategoryIndex === idx && ( */}

//                     <ListView
//                         data={subCategory?.children.slice(0, 6)}
//                         numColumns={3}
//                         nestedScrollEnabled={false}
//                         scrollEnabled={false}
//                         renderItem={({ item, index }) => {
//                             console.log('subCategory items : ', item)
//                             return (
//                                 // <TouchableOpacity style={styles.SubCategoryItemsContainer} onPress={() => navigation.navigate('ProductListWithFilters')}>
//                                 //     {
//                                 //         index != 5 ?
//                                 //             <SubCategoryListItems
//                                 //                 image={item?.image}
//                                 //                 name={item?.name}
//                                 //             />
//                                 //             :
//                                 //             <View pointerEvents="none" >
//                                 //                 <ViewMoreButton
//                                 //                     navigation={subCategory}
//                                 //                 />
//                                 //             </View>
//                                 //     }
//                                 // </TouchableOpacity>
//                                 <Text>{'hello'}</Text>
//                             )
//                         }}
//                         initialNumToRender={3}
//                     />
//                 {/* )} */}

//                 {/* {selectedFeedItems?.items.length > 1 && <View style={styles.separator} />} */}
//             </>
//         );
//     }

//     console.log('categoryList : ', JSON.stringify(categoryList)) 


//     console.log('subCategoryList : ', JSON.stringify(subCategoryList)) 

//     return (

//         isCatgListLoading
//             ?
//             (<Loader />)

//             :

//             categoryList?.categories
//                 ?
//                 (<AppBackground>
//                     <AppHeader placeholderText={'What are you looking for?'} />
//                     <View style={styles.container}>
//                         <View style={styles.categoryContainer}>
//                             <ListView
//                                 data={categoryList?.categories}
//                                 renderItem={Categories}
//                             />
//                         </View>

//                         <ScrollView
//                             horizontal={false}
//                             showsHorizontalScrollIndicator={false}
//                             showsVerticalScrollIndicator={false}
//                             scrollEventThrottle={200}
//                             decelerationRate="fast"
//                             style={styles.subCategoryContainer}
//                         >
//                             {/* {
//                                 categoryList?.categories[0]?.children ? (

//                                     categoryList?.categories[0]?.children.map((subCategory, _i) => {
//                                         return (
//                                             subCategory?.children ?
//                                                 <View key={_i} >
//                                                     {RightComponentList(subCategory, _i)}
//                                                 </View>
//                                                 :
//                                                 null
//                                         );
//                                     })
//                                 ) : null
//                             } */}

//                             {
//                                subCategoryList?.children ? (
//                                     subCategoryList?.children.map((subCategory, _i) => {
//                                         console.log('check subcategory : ', subCategory)
//                                         return (
//                                             subCategory?.children ?
//                                                 <View key={_i} >
//                                                     {RightComponentList(subCategory, _i)}
//                                                 </View>
//                                                 :
//                                                 null
//                                             // <Text>{subCategory?.name}</Text>
//                                         );
//                                     })
//                                 ) : null
//                             }
//                         </ScrollView>
//                     </View>
//                 </AppBackground>
//                 )
//                 : null









//     )
// }

// export default Category

// const styles = StyleSheet.create({
//     SubCategoryItemsContainer: {
//         // height: hp(13),
//         width: wp(21),
//         backgroundColor: Colors.WHITE,
//         margin: 5.5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 6,
//         paddingVertical: '6%',
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
//     subCategoryText: {
//         fontFamily: fonts.VISBY_CF_REGULAR,
//         fontWeight: 500,
//         lineHeight: 15,
//         letterSpacing: 0.5,
//         textAlign: 'center'
//     },
//     categorySection: (selectedFeedIndex, index) => ({
//         height: hp(8),
//         width: '100%',
//         borderWidth: 1,
//         borderColor: Colors.GRAY,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: selectedFeedIndex === index ? Colors.LightGray : Colors.WHITE,
//         borderLeftColor: selectedFeedIndex === index ? Colors.themeColor : Colors.GRAY,
//         borderLeftWidth: selectedFeedIndex === index ? 3 : 1
//     }),
//     categoryText: (selectedFeedIndex, index) => ({
//         fontFamily: fonts.VisbyCF_Medium,
//         fontSize: 12,
//         fontWeight: 600,
//         letterSpacing: 0.5,
//         textAlign: 'center',
//         color: selectedFeedIndex === index ? Colors.themeColor : Colors.GRAY3,
//         marginHorizontal: '2%'
//     }),
//     rowContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginHorizontal: wp('2%'),
//         marginBottom: hp('1%')
//     },
//     subCategoryTitle: {
//         fontFamily: fonts.VisbyCF_Demibold,
//         fontWeight: 600,
//         letterSpacing: 0.5,
//         textAlign: 'left',
//         lineHeight: 17
//     },
//     arrowImgStyle: {

//         height: 12,
//         width: 12,
//         resizeMode: 'contain',
//     },
//     separator: {
//         backgroundColor: Colors.GRAY,
//         height: 1,
//         marginVertical: hp('2%'),
//         marginHorizontal: wp('2%')
//     },
//     container: {
//         flex: 1,
//         flexDirection: 'row'
//     },
//     categoryContainer: {
//         width: wp(27),
//         backgroundColor: Colors.WHITE
//     },
//     subCategoryContainer: {
//         flex: 1,
//         marginHorizontal: '1%',
//         marginVertical: '5%'
//     }

// })





















//================-------------------------===============================-----------------------------




import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'
import { useNavigation } from '@react-navigation/native'
import { FeedArray } from '../../constant/DemoArray'
import { categoryLoadingStart, getCategoryList, categoryPageChange, getSubCategoryList } from '../Store/actions/categoryAction'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../constant/Loader'

const Category = () => {
    const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [subCategoryIndex, setSubCategoryIndex] = useState(null);
    const { isCatgListLoading, categoryList, subCategoryList } = useSelector(state => state.categoryReducer);
    const dispatch = useDispatch();

    const navigation = useNavigation();

    useEffect(() => {
        dispatch(categoryLoadingStart());
        getData(1);
        dispatch(categoryPageChange(1));
    }, [])

    const getData = useCallback(page => {
        dispatch(getCategoryList(1, 10));
    }, []);




    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
                onPress={() => {
                    setSelectedFeedIndex(index)
                    setSelectedFeedItems(item)
                    dispatch(getSubCategoryList(item))
                }}
            >
                <Text
                    style={styles.categoryText(selectedFeedIndex, index)}
                    numberOfLines={2}>
                    {item?.name.toUpperCase()}
                </Text>
            </TouchableOpacity>
        );
    }


    const ListView = (props) => {
        return (
            <FlatList
                data={props.data}
                renderItem={props.renderItem}
                keyExtractor={(item, index) => index.toString()}
                {...props}
            />
        );
    }

    const toggleExpand = (index) => {
        setExpanded(!expanded);
        setSubCategoryIndex(index);

    };

    const SubCategoriesTitle = (props) => {
        return (
            <TouchableOpacity style={styles.rowContainer} onPress={() => toggleExpand(props.index)}>
                <Text
                    style={styles.subCategoryTitle}
                >{props.title}</Text>
                <View>
                    {expanded && subCategoryIndex === props.index ? (
                        <Image source={Images.ForwardIcon} style={[styles.arrowImgStyle, { transform: [{ rotate: '90deg' }] }]} />
                    ) : (
                        <Image source={Images.ForwardIcon} style={styles.arrowImgStyle} />
                    )}
                </View>
            </TouchableOpacity>
        );
    }

    const SubCategoryListItems = (props) => {
        return (
            <TouchableOpacity style={styles.SubCategoryItemsContainer} onPress={() => navigation.navigate('ProductListWithFilters')}>
                <Image
                    source={{ uri: props.image }}
                    style={styles.image}
                />
                {
                    props.name &&
                    <Text numberOfLines={2}
                        style={styles.subCategoryText}
                    >{props.name}</Text>
                }
            </TouchableOpacity>
        )
    }

    const ViewMoreButton = (props) => {
        return (
            <TouchableOpacity
                style={styles.SubCategoryItemsContainer}
                onPress={() => navigation.navigate('ViewMoreCategories', { item: props.navigation })}
            >
                <Text numberOfLines={2}
                    style={[styles.subCategoryText, { color: Colors.themeColor }]}
                >{'View More'}</Text>
            </TouchableOpacity>
        );
    }

    const RightComponentList = (subCategory, idx) => {
        return (
            <>
                {subCategory?.name && <SubCategoriesTitle title={subCategory?.name} index={idx} />}

                {expanded && subCategoryIndex === idx && (
                    <ListView
                        data={subCategory?.children.slice(0, 6)}
                        numColumns={3}
                        nestedScrollEnabled={false}
                        scrollEnabled={false}
                        renderItem={({ item, index }) => {
                            return (
                                index != 5 ?
                                    <SubCategoryListItems
                                        image={item?.thumbnail_image}
                                        name={item?.name}
                                    />
                                    :
                                    <ViewMoreButton
                                        navigation={subCategory}
                                    />
                            )
                        }}
                        initialNumToRender={3}
                    />
                )}
                {
                    subCategoryList?.children.length > 1 && <View style={styles.separator} />
                }
            </>
        );
    }

    return (

        !isCatgListLoading

            ?
            <AppBackground>
                <AppHeader placeholderText={'What are you looking for?'} />
                <View style={styles.container}>
                    <View style={styles.categoryContainer}>
                        <ListView
                            data={categoryList?.catetergories}
                            renderItem={renderCategories}
                        />
                    </View>

                    {
                        Object.keys(subCategoryList).length ?
                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                scrollEventThrottle={200}
                                decelerationRate="fast"
                                style={styles.subCategoryContainer}
                            >


                                {subCategoryList?.children.map((subCategory, _i) => {
                                    console.log('check subcategory : ', subCategory)
                                    return (
                                        <View key={_i} >
                                            {RightComponentList(subCategory, _i)}
                                        </View>
                                    );
                                })
                                }

                            </ScrollView>
                            :
                            null
                    }
                </View>
            </AppBackground>
            :
            <Loader />
    )
}

export default Category

const styles = StyleSheet.create({
    SubCategoryItemsContainer: {
        // height: hp(13),
        width: wp(21),
        backgroundColor: Colors.WHITE,
        margin: 5.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: '6%',
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
    subCategoryText: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    categorySection: (selectedFeedIndex, index) => ({
        height: hp(8),
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedFeedIndex === index ? Colors.LightGray : Colors.WHITE,
        borderLeftColor: selectedFeedIndex === index ? Colors.themeColor : Colors.GRAY,
        borderLeftWidth: selectedFeedIndex === index ? 3 : 1
    }),
    categoryText: (selectedFeedIndex, index) => ({
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: selectedFeedIndex === index ? Colors.themeColor : Colors.GRAY3,
        marginHorizontal: '2%'
    }),
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('2%'),
        marginBottom: hp('1%')
    },
    subCategoryTitle: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'left',
        lineHeight: 17
    },
    arrowImgStyle: {

        height: 12,
        width: 12,
        resizeMode: 'contain',
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%')
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    categoryContainer: {
        width: wp(27),
        backgroundColor: Colors.WHITE
    },
    subCategoryContainer: {
        flex: 1,
        marginHorizontal: '1%',
        marginVertical: '5%'
    }

})
