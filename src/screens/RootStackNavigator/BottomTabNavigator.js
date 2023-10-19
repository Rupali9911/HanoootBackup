import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import Checkout from '../Checkout';
import ProfileScreen from '../ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import EmptyDetailScreen from '../../Components/EmptyDetailScreen';
import { hp, wp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
// import Signup from '../AuthScreen/SignUp';
import Category from '../Categories';
import SVGS from '../../constant/Svgs';
import { useSelector } from 'react-redux';

const { HomeIcon,
    HomeActive,
    ProfileIcon,
    ProfileActive,
    CartIcon,
    CartActive,
    CategoryIcon,
    CategoryActive } = SVGS

const Tab = createBottomTabNavigator();


export default function TabComponent() {
    const navigation = useNavigation();

    const { cartItems } = useSelector(state => state.cartReducer);


    const CustomTabIcon = ({ count, focused }) => {

        // <View style={styles.iconContainer}>
        //     <CartActive />
        //     {/* Add the count or any additional custom design */}
        //     <View style={styles.countContainer}>
        //         <Text style={styles.countText}>100</Text>
        //     </View>
        // </View>

        {/* <div className="col-span-2 hidden md:block xl:col-span-2 2xl:col-span-1">
            <div
              onClick={() => {
                router.push('/cart'), dispatch(setLoader(true));
              }}
              className="ml-1 flex cursor-pointer justify-center rounded-full bg-white px-4 py-3"
            >
              <Image
                src={cartimg}
                alt="logo"
                width={20}
                height={20}
                className="mr-2.5 flex items-center justify-center"
              />
              <p className="font-VisbyCFBold text-base font-bold text-[#3777BC]">
                <span className="absolute right-4 top-16 h-6 w-6 rounded-full bg-red-600 text-center text-sm leading-6 text-white">
                  {cartItem?.data?.CartProducts.length ? cartItem?.data?.CartProducts.length : 0}
                </span>
                Cart
              </p>
            </div>
          </div> */}



        const shouldDisplayPlusIcon = count > 100;

        return (
            <View style={styles.iconContainer}>
                {focused ? <CartActive /> : <CartIcon />}

                {count > 0 && (
                    // <View style={styles.countContainer}>
                    //     <Text style={styles.countText}>{count > 100 ? '99+' : count}</Text>
                    // </View>
                    <View style={styles.plusIconContainer}>
                        {/* <HomeIcon /> */}
                        <Text style={styles.countText}>{count > 100 ? '99+' : count}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            detachInactiveScreens={true}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                lazy: true,
                tabBarVisible: true,
                tabBarStyle: {
                    // paddingVertical: hp('1%'),
                    // backgroundColor: 'red',
                    height: hp(9.85)
                },
                tabBarActiveTintColor: Colors.themeColor,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        return (focused ? <HomeActive /> : <HomeIcon />);
                    }
                    else if (route.name === 'Category') {
                        // iconName = focused ? Images.categorySelected : Images.categories;
                        return (focused ? <CategoryActive /> : <CategoryIcon />);
                    } else if (route.name === 'Cart') {
                        // return (focused ? <CartActive /> : <CartIcon />);
                        return <CustomTabIcon count={cartItems?.length ? cartItems?.length : 0} focused={focused} />

                    } else if (route.name === 'Profile') {
                        return (focused ? <ProfileActive /> : <ProfileIcon />);
                    }
                    // return (
                    //     // <Image
                    //     //     source={iconName}
                    //     //     resizeMode="contain"
                    //     //     style={{ width: wp(6), height: hp(2.5) }}
                    //     // />
                    // );
                },
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    // iconContainer: {
    //     position: 'relative',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // countContainer: {
    //     position: 'absolute',
    //     top: -8,
    //     right: -8,
    //     backgroundColor: 'red',
    //     borderRadius: 100,
    //     // padding: 4,
    //     height: hp(2.22),
    //     width: wp(4.80),
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // countText: {
    //     color: Colors.WHITE,
    //     fontSize: 12,
    //     fontWeight: 'bold',
    // },


    iconContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIconContainer: {
        position: 'absolute',
        top: -15,
        right: -13,
        backgroundColor: Colors.RED, // Adjust color as needed
        borderRadius: 100,
        padding: 4,
        minWidth: 20,
        minHeight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countContainer: {
        position: 'absolute',
        top: 20,
        right: 0,
        // left: 0,
        // bottom: 0,
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 4,
    },
    countText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
})