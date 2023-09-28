import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProductHeader from '../../Components/Cards/ProductHeader'
import AppHeader from '../../Components/AppHeader'
import AppBackground from '../../Components/AppBackground'
import Images from '../../../constant/Images'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import AppButton from '../../Components/AppButton'
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../../utility'
import { getFonts } from '../../utils'


const EmptyAddress = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.ProductView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, }}>
                <Image source={Images.LocationClrImg} style={{ height: 30, width: 20 }} />
                <View >
                    <Text
                        style={styles.productName}
                    >{translate('common.haventAddedAddress')}</Text>
                    <Text style={[styles.productName, { color: Colors.PRICEGRAY }]} numberOfLines={2} >{translate('common.pleaseaddnewaddress')}</Text>
                </View>
            </View>
            <AppButton label={translate('common.addnewaddress')}
                leftSideImg
                ImgURI={Images.plusIcon}
                labelStyle={{ color: Colors.themeColor }} containerStyle={{ backgroundColor: Colors.WHITE, marginTop: '8%' }}
                onPress={() => navigation.navigate('NewAddress')}
            />

        </View>

    )
}

export default EmptyAddress

const styles = StyleSheet.create({
    ProductView: {
        backgroundColor: Colors.WHITE,


        padding: 20,
        borderBottomColor: Colors.GRAY,
        borderTopColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        // marginVertical: '2%'
    },
    productName: {
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: 600,
        letterSpacing: 0.5,
        fontSize: 16
    },
})