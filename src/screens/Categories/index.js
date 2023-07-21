import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'
import { useNavigation } from '@react-navigation/native'
import { FeedArray } from '../../constant/DemoArray'

const Category = () => {
    const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
    const [selectedFeedItems, setSelectedFeedItems] = useState({
        "category": "Popular",
        "items": [
            {
                "products": [
                    {
                        "name": "Apple",
                        "image": 'https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45',
                    },
                    {
                        "name": "IOS",
                        "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
                    },
                    {
                        "name": "Android",
                        "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
                    },
                    {
                        "name": "Cable",
                        "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
                    },
                    {
                        "name": "Holder",
                        "image": "https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?t=st=1689927807~exp=1689928407~hmac=d9ea7a6aed574db24594ad3af3dd26c7870682ff2e10d7bba1187ba4e165ee45",
                    }
                ]
            },
        ]
    });

    const navigation = useNavigation();


    const Categories = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
                onPress={() => {
                    setSelectedFeedIndex(index)
                    setSelectedFeedItems(item)
                }}
            >
                <Text
                    style={styles.categoryText(selectedFeedIndex, index)}
                    numberOfLines={2}>
                    {item?.category}
                </Text>
            </TouchableOpacity>
        );
    }

    const SubCategoriesTitle = (title) => {
        return (
            <View style={styles.rowContainer}>
                <Text
                    style={styles.subCategoryTitle}
                >{title}</Text>
                <TouchableOpacity>
                    <Image source={Images.ForwardIcon} style={styles.arrowImgStyle} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <AppBackground>
            <AppHeader placeholderText={'What are you looking for?'} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: wp(27), backgroundColor: Colors.WHITE }}>
                    <FlatList
                        data={FeedArray}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={Categories}
                    />
                </View>

                <View style={{ flex: 1, marginHorizontal: '1%', marginVertical: '5%' }}>
                    {selectedFeedItems ? (
                        <FlatList
                            data={selectedFeedItems?.items}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    item?.products ? 
                                        <>
                                            {item?.title &&
                                                SubCategoriesTitle(item?.title)
                                            }
                                            <FlatList
                                                data={item?.products.slice(0, 6)}
                                                keyExtractor={(item, index) => index.toString()}
                                                numColumns={3}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <View style={styles.CategorySubProductContainer}>
                                                            {
                                                                index != 5 ?
                                                                    <>
                                                                        <Image
                                                                            source={{ uri: item?.image }}
                                                                            style={styles.image}
                                                                        />
                                                                        {
                                                                            item?.name &&
                                                                            <Text numberOfLines={2}
                                                                                style={styles.subCategoryText}
                                                                            >{item?.name}</Text>
                                                                        }
                                                                    </>
                                                                    :
                                                                    <TouchableOpacity
                                                                        onPress={() => navigation.navigate('ViewMoreCategories', { item: item?.products })}
                                                                    >
                                                                        <Text numberOfLines={2}
                                                                            style={[styles.subCategoryText, { color: Colors.themeColor }]}
                                                                        >{'View More'}</Text>
                                                                    </TouchableOpacity> 
                                                            }
                                                        </View>
                                                    );
                                                }}
                                            />
                                            {
                                                selectedFeedItems?.items.length > 1 && <View style={styles.separator} />
                                            }

                                        </>
                                        :
                                        <View style={{ flex: 1 }}>
                                            <View style={styles.CategorySubProductContainer}>
                                                <Image
                                                    source={{ uri: item?.image }}
                                                    style={styles.image}
                                                />
                                                <Text numberOfLines={2}
                                                    style={styles.subCategoryText}
                                                >{item?.name}</Text>
                                            </View>
                                        </View>
                                );
                            }}
                        />
                    ) : null}
                </View>
            </View>
        </AppBackground>
    )
}

export default Category

const styles = StyleSheet.create({
    CategorySubProductContainer: {
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
        transform: [{ rotate: '90deg' }],
        height: 12,
        width: 12,
        resizeMode: 'contain',
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%')
    }

})
