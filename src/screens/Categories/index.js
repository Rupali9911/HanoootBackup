import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'
import { useNavigation } from '@react-navigation/native'
// import { FeedArray } from '../../constant/DemoArray'
import { FeedArray } from '../../constant/DemoArray'
import { categoryLoadingStart, getCategoryList, categoryPageChange, getSubCategoryList } from '../Store/actions/categoryAction'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../constant/Loader'
import { capitalizeFirstLetter } from '../utils'

const Category = () => {
    const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [subCategoryIndex, setSubCategoryIndex] = useState(null);
    const { isCatgListLoading, categoryList, subCategoryList, categoryPageNum, categoryTotalCounts } = useSelector(state => state.categoryReducer);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer.userData);


    const navigation = useNavigation();

    useEffect(() => {
        dispatch(categoryLoadingStart());
        getData(1);
        dispatch(categoryPageChange(1));
    }, [])

    const getData = useCallback(page => {
        dispatch(getCategoryList(page));
    }, []);

    console.log('USERDATA: ', userData)

    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
                onPress={() => {
                    setSelectedFeedIndex(index)
                    // setSelectedFeedItems(item)
                    dispatch(getSubCategoryList(item))
                }}
            >
                <Text
                    style={styles.categoryText(selectedFeedIndex, index)}
                    numberOfLines={2}>
                    {capitalizeFirstLetter(item?.name)}
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
                onEndReached={props.onEndReached}
                onEndReachedThreshold={props.onEndReachedThreshold}
                ListFooterComponent={props.ListFooterComponent}
                {...props}
            />
        );
    }

    const handleFlatListEndReached = () => {
        if (
            !isCatgListLoading &&
            categoryList?.rows.length !== categoryTotalCounts
        ) {
            let num = categoryPageNum + 1;
            // dispatch(categoryLoadingStart());
            getData(num);
            dispatch(categoryPageChange(num));
        }
    };

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
            <TouchableOpacity style={styles.SubCategoryItemsContainer} onPress={() => navigation.navigate('ProductListWithFilters', { category_id: subCategoryList?.id, headerTitle: subCategoryList?.name })}>
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

        console.log('RightComponentList : ', subCategoryList)
        return (
            <>
                {subCategory?.name && <SubCategoriesTitle title={capitalizeFirstLetter(subCategory?.name)} index={idx} />}

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
                                        image={item?.thumbnail_image ? item?.thumbnail_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png'}
                                        name={item?.name}
                                        id={subCategory?.parent_id}
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


    const renderCategoryCollectionList = () => {
        return (

            <View style={styles.container}>
                <View style={styles.categoryContainer}>
                    <ListView
                        data={categoryList?.rows}
                        renderItem={renderCategories}
                        onEndReached={handleFlatListEndReached}
                        onEndReachedThreshold={0.5}
                    // ListFooterComponent={() => console.log('Footer Called')}
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

        );
    }

    const renderNoDataFound = () => {
        return (
            <View style={styles.sorryMessageCont}>
                <Text style={styles.sorryMessage}>{'No data found'}</Text>
            </View>
        );
    }



    return (
        <AppBackground>
            <AppHeader placeholderText={'What are you looking for?'} />
            {isCatgListLoading && categoryPageNum === 1 ?
                (<Loader />) :
                categoryList?.rows?.length > 0 ?
                    renderCategoryCollectionList()
                    :
                    renderNoDataFound()}
        </AppBackground>
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
    },
    sorryMessageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sorryMessage: {
        fontSize: 15,
        fontFamily: fonts.VisbyCF_Demibold,
    },

})
