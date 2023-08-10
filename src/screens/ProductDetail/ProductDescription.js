import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from '../Components/Cards/ProductHeader';
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';

const ProductDescription = (props) => {
    const { data } = props;
    return (
        <>
            {data ?
                <>
                    <ProductHeader TitleStyle={{ fontSize: 18 }} title={'Description'} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={styles.items}>{data.trim()}</Text>
                    </View>
                </>
                : null}
        </>
    )
}

export default ProductDescription

const styles = StyleSheet.create({
    items: {
        fontFamily: fonts.VisbyCF_Medium, lineHeight: 19, letterSpacing: 0.5, fontWeight: 500, color: Colors.PRICEGRAY
    }
})