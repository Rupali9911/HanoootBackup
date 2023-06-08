import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';

const ProductVariation = (props) => {

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

    const renderData = ({ item, index }) => {
        var BorderColor;
        var TextColor;

        if (index === 0) {
            BorderColor = Colors.themeColor;
            TextColor = Colors.themeColor
        }
        else {
            BorderColor = Colors.GRAY;
            TextColor = Colors.BLACK;
        }

        return (
            <View style={styles.container}>
                <BGText borderColor={BorderColor} color={TextColor} >{item.val}</BGText>
            </View>
        );
    }

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
        marginHorizontal: 20, marginVertical: 10, rowGap: 8
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