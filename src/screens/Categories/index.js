import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { categoryLoadingStart, getCategoryList, categoryPageChange, getSubCategoryList, categoryListReset, subCategoryListReset, subCategoryLoadingStart } from '../Store/actions/categoryAction'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../constant/Loader'
import { capitalizeFirstLetter, getFonts } from '../utils'
import { translate } from '../../utility'
import ImageRenderer from '../../Components/universal/ImageRender'

const Category = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [subCategoryIndex, setSubCategoryIndex] = useState(null);
    const [subSubCategory, setSubSubCategory] = useState({
        data: [],
        name: null
    });
    const [subSubCategoryName, setSubSubCategoryName] = useState(null);

    const {
        isCatgListLoading,
        categoryList,
        categoryPageNum,
        categoryTotalCounts,
        subCatgListLoading,
        subCategoryList,
    } = useSelector(state => state.categoryReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

    useEffect(() => {
        dispatch(categoryLoadingStart());
        getData(1);
        dispatch(categoryPageChange(1));
    }, [isFocused])

    const getData = useCallback(page => {
        dispatch(getCategoryList(page));
    }, []);

    const renderCategories = ({ item, index }) => {

        return (
            <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
                onPress={() => {
                    setSubSubCategory({
                        data: [],
                        name: null
                    })
                    dispatch(subCategoryListReset())
                    setSelectedFeedIndex(index)
                    dispatch(subCategoryLoadingStart(true))
                    dispatch(getSubCategoryList(item?.id))
                }}
            >
                <Text
                    style={styles.categoryText(selectedFeedIndex, index)}
                    numberOfLines={2}>
                    {selectedLanguageItem?.language_id === 0 ? capitalizeFirstLetter(item?.name) : item?.name_arabic}
                </Text>
            </TouchableOpacity>
        );
    }

    function getRandomRecords(chunkedArrays) {
        const randomRecords = [];
        chunkedArrays.forEach((chunk) => {
            const randomIndex = Math.floor(Math.random() * chunk.length);
            randomRecords.push(chunk[randomIndex]);
        });
        return randomRecords;
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
            categoryList.length < categoryTotalCounts
        ) {
            let num = categoryPageNum + 1;
            // dispatch(categoryLoadingStart());
            getData(num);
            dispatch(categoryPageChange(num));
        }
    };

    const SubCategoriesTitle = (props) => {
        return (
            <View style={styles.rowContainer}>
                <Text
                    style={styles.subCategoryTitle}
                >{props.title}</Text>

            </View>
        );
    }

    const SubCategoryListItems = (props) => {
        return (
            // <TouchableOpacity style={styles.SubCategoryItemsContainer} onPress={() => navigation.navigate('ProductListWithFilters', { category_id: subCategoryList?.id, headerTitle: subCategoryList?.name })}>
            <TouchableOpacity style={styles.SubCategoryItemsContainer} onPress={() =>
                props.section == 2 && props.item
                    ?
                    setSubSubCategory({
                        data: props?.item?.children,
                        name: props?.item?.name
                    })
                    :
                    navigation.navigate('ProductListWithFilters', { category_id: props?.id, headerTitle: props?.name })
            }>
                <ImageRenderer height={hp(6)} width={wp(13)} style={styles.image} uri={props.image} />
                {
                    props?.name &&
                    <Text numberOfLines={2}
                        style={styles.subCategoryText}
                    >{props.name}</Text>
                }
            </TouchableOpacity >
        )
    }

    const ViewMoreButton = (props) => {
        return (
            <TouchableOpacity
                style={styles.SubCategoryItemsContainer}
                onPress={() => navigation.navigate('ViewMoreCategories', { item: props.navigation, title: props.title, section: props.section })}
            >
                <Text numberOfLines={2}
                    style={[styles.subCategoryText, { color: Colors.themeColor }]}
                >{translate('common.viewmore')}</Text>
            </TouchableOpacity>
        );
    }

    // const RightComponentList = (subCategory, idx) => {
    //     return (
    //         <>
    //             {subCategory?.name && <SubCategoriesTitle title={selectedLanguageItem?.language_id === 0 ? capitalizeFirstLetter(subCategory?.name) : subCategory?.name_arabic} index={idx} />}

    //             {expanded && subCategoryIndex === idx && (
    //                 <ListView
    //                     data={subCategory?.children.slice(0, 6)}
    //                     numColumns={3}
    //                     nestedScrollEnabled={false}
    //                     scrollEnabled={false}
    //                     renderItem={({ item, index }) => {
    //                         // const imageUrl = item?.thumbnail_image ? item?.thumbnail_image : Images.skeleton;
    //                         // const extension = imageUrl.split('.').pop().toLowerCase();

    //                         return (
    //                             index != 5 ?
    //                                 <SubCategoryListItems
    //                                     image={item?.thumbnail_image}
    //                                     // extension={extension}
    //                                     name={selectedLanguageItem?.language_id === 0 ? item?.name : item?.name_arabic}
    //                                     // id={subCategory?.parent_id}
    //                                     id={item?.id}
    //                                 />
    //                                 :
    //                                 <ViewMoreButton
    //                                     navigation={subCategory}
    //                                 />
    //                         )
    //                     }}
    //                     initialNumToRender={3}
    //                 />
    //             )}
    //             {
    //                 subCategoryList?.children.length > 1 && <View style={styles.separator} />
    //             }
    //         </>
    //     );
    // }

    const refreshFunc = () => {
        setSubSubCategory({
            data: [],
            name: null
        })
        dispatch(categoryListReset());
        getData(1);
        dispatch(categoryPageChange(1));
    }

    const handleFlatlistRefresh = () => {
        dispatch(categoryLoadingStart(true));
        refreshFunc()
    }

    const renderFooter = () => {
        if (!isCatgListLoading) return null;
        return (
            <ActivityIndicator size='large' color={Colors.themeColor} />
        )
    }

    const renderCategoryCollectionList = () => {
        return (
            <View style={styles.container}>
                <View style={styles.categoryContainer}>
                    <ListView
                        data={categoryList}
                        renderItem={renderCategories}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={handleFlatListEndReached}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={renderFooter}
                        onRefresh={handleFlatlistRefresh}
                        refreshing={categoryPageNum === 1 && isCatgListLoading}
                    />
                </View>
                {
                    subCatgListLoading && Object.keys(subCategoryList).length === 0
                        ?
                        <Loader />
                        :
                        Object.keys(subCategoryList).length > 0 ?
                            <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                scrollEventThrottle={200}
                                decelerationRate="fast"
                                style={styles.subCategoryContainer}
                            >
                                {subCategoryList?.brandList?.length > 0 ?
                                    <SubCategoriesTitle title={'Brand List'} /> : null}
                                <ListView
                                    data={getRandomRecords(subCategoryList?.brandList?.slice(0, 6))}
                                    numColumns={3}
                                    nestedScrollEnabled={false}
                                    scrollEnabled={false}
                                    renderItem={({ item, index }) => {
                                        return (
                                            index != 5 ?
                                                <SubCategoryListItems
                                                    image={item?.ManagementBrand?.thumbnail_image}
                                                    // extension={extension}
                                                    name={item?.ManagementBrand?.name}
                                                    // id={subCategory?.parent_id}
                                                    id={item?.brand_id}
                                                />
                                                :
                                                <ViewMoreButton
                                                    navigation={getRandomRecords(subCategoryList?.brandList?.slice(0, 10))}
                                                    title={'Brand List'}
                                                    section={1}
                                                />
                                        )
                                    }}
                                    initialNumToRender={3}
                                />
                                {subCategoryList?.brandList?.length > 0 ? <View style={styles.separator} /> : null}

                                {subCategoryList?.subcategoryList?.children?.length > 0 ?
                                    <SubCategoriesTitle title={selectedLanguageItem?.language_id === 0 ? subCategoryList?.subcategoryList?.name : subCategoryList?.subcategoryList?.name_arabic} /> : null}
                                <ListView
                                    data={subCategoryList?.subcategoryList?.children}
                                    numColumns={3}
                                    nestedScrollEnabled={false}
                                    scrollEnabled={false}
                                    renderItem={({ item, index }) => {
                                        console.log('here is subCategoryList items : ', item)
                                        return (
                                            index != 5 ?
                                                <SubCategoryListItems
                                                    image={item?.thumbnail_image}
                                                    // extension={extension}
                                                    name={item?.name}
                                                    // id={subCategory?.parent_id}
                                                    id={item?.id}

                                                    section={2}
                                                    item={item}
                                                />
                                                :
                                                <ViewMoreButton
                                                    navigation={subCategoryList?.subcategoryList?.children}
                                                    title={selectedLanguageItem?.language_id === 0 ? subCategoryList?.subcategoryList?.name : subCategoryList?.subcategoryList?.name_arabic}
                                                />
                                        )
                                    }}
                                    initialNumToRender={3}
                                />

                                {subCategoryList?.subcategoryList?.children?.length > 0 ? <View style={styles.separator} /> : null}

                                <ListView
                                    data={subCategoryList?.subcategoryList?.children}
                                    // numColumns={3}
                                    nestedScrollEnabled={false}
                                    scrollEnabled={false}
                                    renderItem={({ item, index }) => {
                                        console.log('number of time loop run ', item?.name, index)
                                        const subsubItem = item;

                                        return (
                                            item?.children?.length > 0
                                                ?
                                                <View key={index} >
                                                    <SubCategoriesTitle title={item?.name} />
                                                    <ListView
                                                        data={item?.children}
                                                        numColumns={3}
                                                        nestedScrollEnabled={false}
                                                        scrollEnabled={false}
                                                        renderItem={({ item, index }) => {
                                                            console.log('number of time second loop run ', item?.name, index)
                                                            return (
                                                                index != 5 && index < 5 ?
                                                                    <SubCategoryListItems
                                                                        image={item?.thumbnail_image}
                                                                        name={item?.name}
                                                                        id={item?.id}
                                                                    />
                                                                    :
                                                                    index > 5 ? null :
                                                                        <ViewMoreButton
                                                                            navigation={subsubItem?.children}
                                                                            title={subsubItem?.name}
                                                                        />
                                                            )
                                                        }}
                                                    />
                                                    <View style={styles.separator} />
                                                </View>
                                                : null
                                        )
                                    }}
                                    initialNumToRender={3}
                                />

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
                <Text style={styles.sorryMessage}>{translate('common.nodatafound')}</Text>
            </View>
        );
    }

    return (
        <AppBackground >
            <AppHeader placeholderText={translate('common.whatLookingFor')} />
            {isCatgListLoading && categoryPageNum === 1 ?
                <Loader /> :
                categoryList.length > 0 ?
                    renderCategoryCollectionList()
                    :
                    renderNoDataFound()}
        </AppBackground>
    )
}

export default Category

const styles = StyleSheet.create({
    SubCategoryItemsContainer: {
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
        fontFamily: getFonts.REGULAR,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    categorySection: (selectedFeedIndex, index) => ({
        height: hp(8),
        width: '100%',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedFeedIndex === index ? Colors.LightGray : Colors.WHITE,
        borderLeftColor: selectedFeedIndex === index ? Colors.themeColor : Colors.GRAY,
        borderLeftWidth: selectedFeedIndex === index ? 3 : 1,
        borderTopColor: Colors.GRAY,
        borderRightColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY


    }),
    categoryText: (selectedFeedIndex, index) => ({
        fontFamily: getFonts.SEMI_BOLD,
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
        fontFamily: getFonts.SEMI_BOLD,
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
        fontFamily: getFonts.SEMI_BOLD,
    },

})
