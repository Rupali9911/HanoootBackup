import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Images from '../../constant/Images'


const Category = () => {
    const [selectedFeedIndex, setSelectedFeedIndex] = useState(0)
    const [selectedFeedItems, setSelectedFeedItems] = useState(null)

    const FeedArray = [
        {
            "category": "Popular",
            "items": [
                {
                    "name": "Apple",
                    "image": 'https://images.pexels.com/photos/10141956/pexels-photo-10141956.jpeg',

                },
                {
                    "name": "IOS",
                    "image": "https://img.freepik.com/free-photo/phone-14-front-side-arabic-themed-background_187299-35431.jpg",

                },
                {
                    "name": "Android",
                    "image": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1689836515~exp=1689837115~hmac=6fff98337487db9e91cfff3be34b7b379f6f2f92d75cd4d9a56f88eb002f3302",
                },
                {
                    "name": "Cable",
                    "image": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1689836515~exp=1689837115~hmac=6fff98337487db9e91cfff3be34b7b379f6f2f92d75cd4d9a56f88eb002f3302",

                },
                {
                    "name": "Holder",
                    "image": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1689836515~exp=1689837115~hmac=6fff98337487db9e91cfff3be34b7b379f6f2f92d75cd4d9a56f88eb002f3302",

                }
                
    ]
},
    {
        "category": "Electronics",
        "items": [
            {
                "name": "Apple iPhone 11 Pro Max",
                "image": 'https://images.pexels.com/photos/10141956/pexels-photo-10141956.jpeg',

            },
            {
                "name": "Samsung Galaxy S20",
                "image": "https://img.freepik.com/free-photo/phone-14-front-side-arabic-themed-background_187299-35431.jpg",

            },
            {
                "name": "Google Pixel 4 XL",
                "image": "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1689836515~exp=1689837115~hmac=6fff98337487db9e91cfff3be34b7b379f6f2f92d75cd4d9a56f88eb002f3302",

            }
        ]
    },
    {
        "category": "Clothing",
        "items": [
            {
                "name": "Adidas Men's T-Shirt",
                "image": "https://img.freepik.com/premium-photo/white-t-shirt-with-bunny-it_816702-534.jpg?w=740",

            },
            {
                "name": "Nike Men's Shorts",
                "image": "https://img.freepik.com/premium-photo/black-shirt-with-picture-man-s-head-words-head-it_729592-1666.jpg?w=740",

            },
            {
                "name": "Under Armour Men's Hoodie",
                "image": "https://img.freepik.com/premium-photo/brooklyn-break-all-rules-graphic-abstract-typography-vector-t-shirt-design_37433-934.jpg?w=740",

            }
        ]
    },
    {
        "category": "Home & KitchenHome",
        "items": [
            {
                "name": "Instant Pot Duo 7-in-1",
                "image": "https://img.freepik.com/free-photo/electric-blender-mixer-juicer-set_140725-7263.jpg?w=996&t=st=1689836826~exp=1689837426~hmac=1d306e30de1535e06ec0fd1061b32de06fd2f26b7c959e8300935360890881b8",

            },
            {
                "name": "Keurig K-Mini Plus",
                "image": "https://img.freepik.com/free-photo/interiors-homely-kitchen_53876-146777.jpg?w=1060&t=st=1689836829~exp=1689837429~hmac=66b7b4997f29e988f06d9a03bb4741c9997fca6cedadb580d39048afbcccd4aa",

            },
            {
                "name": "Dyson V7 Motorhead",
                "image": "https://img.freepik.com/free-photo/top-view-wooden-spoon-empty-plastic-coffee-pot-cutting-board-grater-pink-surface_140725-94279.jpg?w=1060&t=st=1689836832~exp=1689837432~hmac=3a834db77f4f5bfa9f078d070d7bce0b982b549012d939009c24cc0787fd3f23",

            },
            {
                "name": "Dyson V7 Motorhead",
                "image": "https://img.freepik.com/free-photo/top-view-wooden-spoon-empty-plastic-coffee-pot-cutting-board-grater-pink-surface_140725-94279.jpg?w=1060&t=st=1689836832~exp=1689837432~hmac=3a834db77f4f5bfa9f078d070d7bce0b982b549012d939009c24cc0787fd3f23",

            }
        ]
    },
    {
        "category": "Beauty & Health Care",
        "items": [
            {
                "name": "Olay Regenerist Micro-Sculpting Cream",
                "image": "https://img.freepik.com/free-photo/top-view-arrangement-with-spa-items-wooden-background_23-2148268490.jpg?w=1060&t=st=1689849946~exp=1689850546~hmac=12618850addb91c7bb192a99f1513a9addaffd3bce1381c76015053ccec6e898",

            },
            {
                "name": "Burt's Bees Intense Hydration Cream Cleanser",
                "image": "https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?w=1060&t=st=1689849949~exp=1689850549~hmac=afe849c4e5114c6602c6720a1e65b3ee5dc89d4125d4af99af102af119981bfd",
            },
            {
                "name": "Neutrogena Hydro Boost Water Gel",
                "image": "https://img.freepik.com/free-photo/close-up-elegant-beauty-selfcare-treatment_23-2149238298.jpg?w=360&t=st=1689849967~exp=1689850567~hmac=40c5c5db275c6d623185fa7c45b0868c460b6fb0d10a6ff164e66a1f2a03fc6c",

            },
            {
                "name": "Neutrogena Hydro Boost Water Gel",
                "image": "https://img.freepik.com/free-photo/women-s-cosmetic-products-placed-blue_1150-17127.jpg?w=1060&t=st=1689849975~exp=1689850575~hmac=76cdc6b730b42aa580a31d4d2121601f479506371f774ee665fa053009d7c325",

            },
            {
                "name": "Neutrogena Hydro Boost Water Gel",
                "image": "https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?w=1060&t=st=1689849949~exp=1689850549~hmac=afe849c4e5114c6602c6720a1e65b3ee5dc89d4125d4af99af102af119981bfd",

            },
            {
                "name": "Neutrogena Hydro Boost Water Gel",
                "image": "https://img.freepik.com/free-photo/women-s-cosmetic-products-placed-blue_1150-17127.jpg?w=1060&t=st=1689849975~exp=1689850575~hmac=76cdc6b730b42aa580a31d4d2121601f479506371f774ee665fa053009d7c325",
                "price": "17.99"
                },
            {
                "name": "Neutrogena Hydro Boost Water Gel",
                "image": "https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?w=1060&t=st=1689849949~exp=1689850549~hmac=afe849c4e5114c6602c6720a1e65b3ee5dc89d4125d4af99af102af119981bfd",

            }
        ]
    },
    {
        "category": "Outdoor & Sports",
        "items": [
            {
                "name": "Wilson NFL Football",
                "image": "https://img.freepik.com/free-photo/top-view-composition-with-neatly-arranged-organized-sport-items_23-2150275221.jpg?w=1060&t=st=1689852491~exp=1689853091~hmac=64e35bcfc3d685e3342bbc44737f934fca3f1463344304b64c562f3014d1c4e0",

            },
            {
                "name": "Spalding NBA Basketball",
                "image": "https://img.freepik.com/free-photo/flat-lay-still-life-sport-composition_23-2149006379.jpg?w=1060&t=st=1689852495~exp=1689853095~hmac=541235752ae071947fc7836b7fe2eca8a0f469a94dae9c5c808037d9265ebf4b",

            },
            {
                "name": "Rawlings Baseball Glove",
                "image": "https://img.freepik.com/free-photo/flat-lay-still-life-sport-composition_23-2149006379.jpg?w=1060&t=st=1689852495~exp=1689853095~hmac=541235752ae071947fc7836b7fe2eca8a0f469a94dae9c5c808037d9265ebf4b",

            },
            {
                "name": "Wilson NFL Football",
                "image": "https://img.freepik.com/free-photo/basketball-bag-with-headphones_23-2148375967.jpg?w=996&t=st=1689852502~exp=1689853102~hmac=ac6668f6d820426b8dc166807484299e2090d420a05a6575133a252facd312fb",

            },
            {
                "name": "Spalding NBA Basketball",
                "image": "https://img.freepik.com/premium-photo/hiking-boots-backpack-map-background_488220-7102.jpg?w=1060",

            },
            {
                "name": "Rawlings Baseball Glove",
                "image": "https://img.freepik.com/free-photo/flat-lay-still-life-sport-composition_23-2149006379.jpg?w=1060&t=st=1689852495~exp=1689853095~hmac=541235752ae071947fc7836b7fe2eca8a0f469a94dae9c5c808037d9265ebf4b",
            }
        ]
    }
    ]


return (
    <AppBackground>
        <AppHeader placeholderText={'What are you looking for?'} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: wp(27), backgroundColor: Colors.WHITE }}>
                <FlatList
                    data={FeedArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.categorySection(selectedFeedIndex, index)}
                            onPress={() => {
                                setSelectedFeedIndex(index)
                                setSelectedFeedItems(item)
                            }}
                        >
                            <Text
                                style={styles.categoryText(selectedFeedIndex, index)}
                                numberOfLines={2}>
                                {item.category}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ flex: 1, marginHorizontal: '1%', marginVertical: '5%' }}>
                {selectedFeedItems ? (
                    <FlatList
                        data={selectedFeedItems?.items.slice(0, 6)}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={3}
                        renderItem={({ item, index }) => (
                            <View style={styles.CategorySubProductContainer}>
                                {
                                    index != 5 ?
                                        <>
                                            <Image
                                                source={{ uri: item?.image }}
                                                style={styles.image}
                                            />
                                            <Text numberOfLines={2}
                                                style={styles.subCategoryText}
                                            >{item?.name}</Text>
                                        </>
                                        :
                                        <TouchableOpacity>
                                            <Text numberOfLines={2}
                                                style={[styles.subCategoryText, { color: Colors.themeColor }]}
                                            >{'View More'}</Text>
                                        </TouchableOpacity>
                                }


                            </View>
                        )}
                    // onEndReached={}
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
        height: hp(13),
        width: wp(21),
        backgroundColor: Colors.WHITE,
        margin: 5.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        padding: 10,
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
    })

})



// import React, { Component } from 'react';
// import { Text, View, FlatList } from 'react-native';
// import AppBackground from '../Components/AppBackground';

// const FeedData = [
//     {
//         title: 'Sports',
//         items: [
//             { id: 1, name: 'Soccer' },
//             { id: 2, name: 'Basketball' },
//             { id: 3, name: 'Tennis' },
//             { id: 4, name: 'Badminton' },
//         ]
//     },
//     {
//         title: 'Food',
//         items: [
//             { id: 1, name: 'Pizza' },
//             { id: 2, name: 'Burger' },
//             { id: 3, name: 'Sandwich' },
//             { id: 4, name: 'Pasta' },
//         ]
//     },
//     {
//         title: 'Movies',
//         items: [
//             { id: 1, name: 'Action' },
//             { id: 2, name: 'Comedy' },
//             { id: 3, name: 'Romance' },
//             { id: 4, name: 'Thriller' },
//         ]
//     }
// ];

// export default class Category extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedFeed: null
//         };
//     }

//     render() {
//         return (
//             <AppBackground>
//                 <View style={{ flex: 1, flexDirection: 'row' }}>
//                     <View style={{ flex: 1 }}>
//                         <FlatList
//                             data={FeedData}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({ item }) => (
//                                 <Text
//                                     style={{ fontSize: 18 }}
//                                     onPress={() => this.setState({ selectedFeed: item })}
//                                 >
//                                     {item.title}
//                                 </Text>
//                             )}
//                         />
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         {this.state.selectedFeed ? (
//                             <FlatList
//                                 data={this.state.selectedFeed.items}
//                                 keyExtractor={(item, index) => index.toString()}
//                                 horizontal={true}
//                                 renderItem={({ item }) => (
//                                     <Text style={{ fontSize: 18 }}>{item.name}</Text>
//                                 )}
//                             />
//                         ) : null}
//                     </View>
//                 </View>
//             </AppBackground>
//         );
//     }
// }

