// import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import fonts from '../../constant/fonts';
// import Colors from '../../constant/Colors';

// const ProductVariation = (props) => {
//     const [selectedIndex, setSelectedIndex] = useState(0)

//     const BGText = props => {
//         const { borderColor, color } = props;
//         return <Text style={{
//             borderColor: borderColor,
//             color: color,
//             ...styles.item
//         }}>{props.children}</Text>
//     }

//     const keyExtractor = (item, index) => {
//         return index;
//     };

//     const ColorChange = () => {
//         var BorderColor;
//         var TextColor;

//         if (index === 1) {
//             BorderColor = Colors.themeColor;
//             TextColor = Colors.themeColor
//         }
//         else {
//             BorderColor = Colors.GRAY;
//             TextColor = Colors.BLACK;
//         }
//     }

//     const renderData = ({ item, index }) => {
//         var BorderColor;
//         var TextColor;

//         if (index === selectedIndex) {
//             BorderColor = Colors.themeColor;
//             TextColor = Colors.themeColor
//         }
//         else {
//             BorderColor = Colors.GRAY;
//             TextColor = Colors.BLACK;
//         }

//         return (
//             <TouchableOpacity style={styles.container}
//                 onPress={() => {
//                     setSelectedIndex(index);
//                     // checkindex();
//                     props.getValue(item.val)
//                 }
//                 }>
//                 <BGText borderColor={BorderColor} color={TextColor} >{item.val}</BGText>
//             </TouchableOpacity>
//         );
//     }

//     console.log('check index : ', selectedIndex)

//     return (
//         <View style={styles.mainCont}>
//             <Text style={styles.heading}>{props.title}</Text>
//             {props.Data ?
//             <FlatList
//                 data={props.Data}
//                 renderItem={renderData}
//                 keyExtractor={keyExtractor}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//             />
//             : null}
//         </View>
//     )
// }

// export default ProductVariation;


// const styles = StyleSheet.create({
//     mainCont: {
//         marginHorizontal: '5%', 
//         marginVertical: '2%', 
//         rowGap: 5
//     },
//     heading: {
//         fontSize: 700,
//         fontFamily: fonts.VisbyCF_Bold,
//         fontSize: 16,
//         lineHeight: 21,
//         letterSpacing: 0.5
//     },
//     container: {
//         // flex: 1, flexDirection: 'row',
//         margin: 5
//     },
//     item: {
//         fontWeight: 500,
//         fontFamily: fonts.VisbyCF_Medium,
//         lineHeight: 19,
//         letterSpacing: 0.5,
//         paddingVertical: 10,
//         paddingHorizontal: 14,
//         borderRadius: 6,
//         fontSize: 16,
//         borderWidth: 1,
//     }
// })


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';

const ProductVariation = (props) => {
    const { variants } = props;
    console.log('variants : ', variants, typeof (variants))


    // console.log( Object.keys(variants).length ? 'data hai ' : 'data ni hai') 

    const renderTitle = (key) => {
        switch (key) {
            case 'variant_size':
                return 'Size'
            case 'variant_color':
                return 'Color'
            case 'variant_style':
                return 'Style'
            case 'variant_model':
                return 'Modal'
            case 'variant_material':
                return 'Material'
            case 'platform':
                return 'Platform'
            case 'edition':
                return 'Edition'
            case 'configuration':
                return 'Configuration'
            case 'variant_book':
                return 'Book'
            default:
                return null;
        }
    }

    const renderDescription = (str) => {
        if(str.includes(':')){
          return str.split(':')[1];
        }
        return str;
      }

    const renderVariantions = () => {
        return (
            Object.keys(variants).map(key => {
                if (variants[key] && key !== 'updatedAt' && key !== 'createdAt' && key !== 'id' && key !== 'variants' && key !== 'variant_item_package_quantity') {
                    return (
                        <View key={key}>
                            <View style={styles.mainCont}>
                                <Text style={styles.heading}>{renderTitle(key)}</Text>
                                <View style={styles.container}
                                    onPress={() => { }}>
                                    <Text style={{
                                        borderColor: Colors.themeColor,
                                        color: Colors.themeColor,
                                        ...styles.item
                                    }}>{renderDescription(variants[key])}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }
            })
        );

    }



    return (

        Object.keys(variants)?.length > 0
            ?
            renderVariantions()
            : null
    )
}

export default ProductVariation

const styles = StyleSheet.create({
    mainCont: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        rowGap: 5
    },
    heading: {
        fontSize: 700,
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    item: {
        fontWeight: 500,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
        fontSize: 16,
        borderWidth: 1,
    },
    container: {
        flex: 1, flexDirection: 'row',
        margin: 5
    },
})