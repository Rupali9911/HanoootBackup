import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from '../Components/Cards/ProductHeader';
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';
import { translate } from '../../utility';
import { getFonts } from '../utils';

const ProductDescription = (props) => {
    const { data } = props;
    return (
        <>
            {data ?
                <>
                    <ProductHeader TitleStyle={{ fontSize: 18 }} title={translate('common.description')} />
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
        fontFamily: getFonts.MEDIUM, lineHeight: 19, letterSpacing: 0.5, fontWeight: 500, color: Colors.PRICEGRAY
    }
})