import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import { hp, wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import fonts from '../../../constant/fonts'
import { useNavigation } from '@react-navigation/native'

const EmailLinkSuccess = () => {

    const navigation = useNavigation();


    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}>

            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />
            <View style={styles.container}>
                <Image source={Images.ToastSuccessBanner} style={styles.image} />
                <Text style={styles.title}>{'Password reset link sent to your email!'}</Text>
                <Text style={styles.description}>{'A password reset email has been sent to the email address, but may take several minutes to show up in your inbox.'}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={[styles.description, { color: Colors.themeColor, marginTop: '5%' }]}>Back to Sign In</Text></TouchableOpacity>
            </View>
        </AppBackground>
    )
}

export default EmailLinkSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: '5%',
        marginVertical: '20%'
    },
    image: {
        height: hp(7),
        width: wp(17),
        resizeMode: 'contain',
        marginBottom: 20
    },
    title: {
        fontWeight: 600,
        fontSize: 24,
        fontFamily: fonts.VisbyCF_Bold,
        lineHeight: 30,
        letterSpacing: 0.5,
        color: Colors.BLACK,
        textAlign: 'center'
    },
    description: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 21,
        letterSpacing: 0.5,
        // maxWidth: '70%',
        color: Colors.PRICEGRAY,
        textAlign: 'center'
    }
})



// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     TouchableOpacity,
// } from 'react-native';
// import AppBackground from '../../Components/AppBackground';
// import AppHeader from '../../Components/AppHeader';

// const iphoneCategories = [
//     {
//         id: '1',
//         categoryName: 'iPhone 11',
//     },
//     {
//         id: '2',
//         categoryName: 'iPhone 11 Pro',
//     },
//     {
//         id: '3',
//         categoryName: 'iPhone 11 Pro Max',
//     },
//     {
//         id: '4',
//         categoryName: 'iPhone SE',
//     },
//     {
//         id: '5',
//         categoryName: 'iPhone XR',
//     },
// ];

// const iPhone11Products = [
//     {
//         id: '1',
//         productName: 'iPhone 11 64GB',
//     },
//     {
//         id: '2',
//         productName: 'iPhone 11 128GB',
//     },
//     {
//         id: '3',
//         productName: 'iPhone 11 256GB',
//     },
// ];

// const iPhone11ProProducts = [
//     {
//         id: '1',
//         productName: 'iPhone 11 Pro 64GB',
//     },
//     {
//         id: '2',
//         productName: 'iPhone 11 Pro 128GB',
//     },
//     {
//         id: '3',
//         productName: 'iPhone 11 Pro 256GB',
//     },
// ];

// const iPhone11ProMaxProducts = [
//     {
//         id: '1',
//         productName: 'iPhone 11 Pro Max 64GB',
//     },
//     {
//         id: '2',
//         productName: 'iPhone 11 Pro Max 128GB',
//     },
//     {
//         id: '3',
//         productName: 'iPhone 11 Pro Max 256GB',
//     },
// ];

// const iPhoneSEProducts = [
//     {
//         id: '1',
//         productName: 'iPhone SE 64GB',
//     },
//     {
//         id: '2',
//         productName: 'iPhone SE 128GB',
//     },
//     {
//         id: '3',
//         productName: 'iPhone SE 256GB',
//     },
// ];

// const iPhoneXRProducts = [
//     {
//         id: '1',
//         productName: 'iPhone XR 64GB',
//     },
//     {
//         id: '2',
//         productName: 'iPhone XR 128GB',
//     },
//     {
//         id: '3',
//         productName: 'iPhone XR 256GB',
//     },
// ];

// class EmailLinkSuccess extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedCategory: '',
//             selectedCategoryProducts: [],
//         };
//     }

//     selectCategory = (categoryName) => {
//         let products = [];
//         switch (categoryName) {
//             case 'iPhone 11':
//                 products = iPhone11Products;
//                 break;
//             case 'iPhone 11 Pro':
//                 products = iPhone11ProProducts;
//                 break;
//             case 'iPhone 11 Pro Max':
//                 products = iPhone11ProMaxProducts;
//                 break;
//             case 'iPhone SE':
//                 products = iPhoneSEProducts;
//                 break;
//             case 'iPhone XR':
//                 products = iPhoneXRProducts;
//                 break;
//             default:
//                 break;
//         }
//         this.setState({
//             selectedCategory: categoryName,
//             selectedCategoryProducts: products,
//         });
//     };

//     render() {
//         return (
//             <AppBackground>
//                 <AppHeader placeholderText={'Search'}/>
//             <View style={styles.container}>
//                 <View style={styles.leftContainer}>
//                     <FlatList
//                         data={iphoneCategories}
//                         renderItem={({item}) => (
//                             <TouchableOpacity
//                                 onPress={() => this.selectCategory(item.categoryName)}>
//                                 <Text style={styles.categoryText}>
//                                     {item.categoryName}
//                                 </Text>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 </View>
//                 <View style={styles.rightContainer}>
//                     <Text style={styles.selectedCategoryText}>
//                         {this.state.selectedCategory}
//                     </Text>
//                     <FlatList
//                         horizontal
//                         data={this.state.selectedCategoryProducts}
//                         renderItem={({item}) => (
//                             <Text style={styles.productText}>
//                                 {item.productName}
//                             </Text>
//                         )}
//                     />
//                 </View>
//             </View>
//             </AppBackground>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//     },
//     leftContainer: {
//         flex: 1,
//         padding: 10,
//     },
//     rightContainer: {
//         flex: 1,
//         padding: 10,
//     },
//     categoryText: {
//         fontSize: 20,
//     },
//     selectedCategoryText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     productText: {
//         fontSize: 18,
//         paddingHorizontal: 10,
//     },
// });

// export default EmailLinkSuccess;