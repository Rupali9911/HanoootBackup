import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'


const ViewMoreCategories = (props) => {
    console.log('Check ViewMoreCategories : ', props?.route?.params?.item)
    return (
        <AppBackground>
            <AppHeader placeholderText={'What are you looking for?'} />
            <FlatList
                data={props?.route?.params?.item}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    <View style={styles.CategorySubProductContainer}>
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
                    </View>
                }}
            />
        </AppBackground>
    )
}

export default ViewMoreCategories

const styles = StyleSheet.create({
    CategorySubProductContainer: {
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
})