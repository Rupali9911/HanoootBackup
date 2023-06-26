import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';

const ProductVariation = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const BGText = props => {
        const { borderColor, color } = props;
        return <Text style={{
            borderColor: borderColor,
            color: color,
            ...styles.item
        }}>{props.children}</Text>
    }

    const keyExtractor = ({ item, index }) => {
        return `_${index}`;
    };

    const ColorChange = () => {
        var BorderColor;
        var TextColor;

        if (index === 1) {
            BorderColor = Colors.themeColor;
            TextColor = Colors.themeColor
        }
        else {
            BorderColor = Colors.GRAY;
            TextColor = Colors.BLACK;
        }
    }

    const renderData = ({ item, index }) => {
        var BorderColor;
        var TextColor;

        if (index === selectedIndex) {
            BorderColor = Colors.themeColor;
            TextColor = Colors.themeColor
        }
        else {
            BorderColor = Colors.GRAY;
            TextColor = Colors.BLACK;
        }

        return (
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    setSelectedIndex(index);
                    // checkindex();
                    props.getValue(item.val)
                }
                }>
                <BGText borderColor={BorderColor} color={TextColor} >{item.val}</BGText>
            </TouchableOpacity>
        );
    }

    console.log('check index : ', selectedIndex)

    return (
        <View style={styles.mainCont}>
            <Text style={styles.heading}>{props.title}</Text>
            <FlatList
                data={props.Data}
                renderItem={renderData}
                keyExtractor={keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ProductVariation;


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
    container: {
        // flex: 1, flexDirection: 'row',
        margin: 5
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
    }
})