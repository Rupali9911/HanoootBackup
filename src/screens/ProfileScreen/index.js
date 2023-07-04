import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground'
import Images from '../../constant/Images'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const Login = route?.params?.LoggedIn;
    console.log('Login : ', Login)

    const ProfileDetail = () => {
        return (
            <View style={styles.profileDetail}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{Login ? 'Andy Lexsian' : 'Hey There,'}</Text>
                    <Text style={styles.userEmail}>{Login ? 'andy.lex@gmail.com' : 'Nice to meet you!'}</Text>
                </View>

                {
                    Login ?
                        <TouchableOpacity
                            onPress={() => console.log('profile')}>
                            <Image source={Images?.pencilIcon} style={styles.pencilImg} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.registerButton}>
                            <Text style={styles.register}>Register</Text>
                        </TouchableOpacity>
                }
            </View>
        );
    }

    const HeadingComponent = (props) => {
        return (
            <View style={{ margin: '5%' }}>
                <Text style={styles.heading}>{props.Title}</Text>
            </View>
        );
    }

    const ListItem = (props) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.leftContainer}>
                    <Image
                        source={props.Image}
                        style={styles.icon}
                    />
                    <Text style={styles.listTitle}>{props.title}</Text>
                </View>
                {/* <Text style={styles.listTitle}>English</Text> */}
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <Image
                        source={Images.ForwardIcon}
                        style={styles.arrowIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const SocialIcon = (props) => {
        return (
            <TouchableOpacity
                onPress={() => console.log('Social Icons')}
                style={{ margin: '5%' }}
            >
                <Image source={props.image} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    return (
        <AppBackground safeAreaColor={Colors.LightGray}>
            <ScrollView>
                <ProfileDetail />
                <HeadingComponent Title={'MY ACCOUNT'} />
                {
                    Login ?
                        <>
                            <ListItem
                                Image={Images.BagIcon}
                                title={'My Orders'}
                                onPress={() => navigation.navigate('OrderList')}
                            />
                            <ListItem
                                Image={Images.Wishlist}
                                title={'Wishlist'}
                                onPress={() => navigation.navigate('WishlistScreen')}
                            />
                            <ListItem
                                Image={Images.Location}
                                title={'My Address'}
                                onPress={() => navigation.navigate('MyAddress')}
                            />
                            <ListItem
                                Image={Images.Payment}
                                title={'Payment Methods'}
                                onPress={() => navigation.navigate('PaymentMethods')}
                            />
                        </> :
                        <ListItem
                            Image={Images.UserLogin}
                            title={'Log In'}
                        />
                }

                <HeadingComponent Title={'SETTING'} />
                {
                    Login && <ListItem
                        Image={Images.ChangePassword}
                        title={'Change Password'}
                    />

                }

                <ListItem
                    Image={Images.Language} x
                    title={'Language'}
                />
                <ListItem
                    Image={Images.Notification}
                    title={'Notification'}
                    onPress={() => navigation.navigate('NotificationScreen')}
                />
                <HeadingComponent Title={'ABOUT'} />
                <ListItem
                    Image={Images.Question}
                    title={'Help & Support'}
                />
                <ListItem
                    Image={Images.Shield}
                    title={'Legal and Policies'}
                />
                <View style={styles.socialIconContainer}>
                    <SocialIcon
                        image={Images.Facebook}
                    />
                    <SocialIcon
                        image={Images.Instagram}
                    />
                    <SocialIcon
                        image={Images.Tiktok}
                    />
                    <SocialIcon
                        image={Images.Linkedin}
                    />
                </View>
                {
                    Login &&
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => console.log('Logout')}
                    >
                        <Text style={styles.logout}>Log Out</Text>
                    </TouchableOpacity>
                }

            </ScrollView>
        </AppBackground>


    )
}

export default ProfileScreen;



const styles = StyleSheet.create({
    profileDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%'
    },
    userName: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    userEmail: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.GRAY2
    },
    pencilImg: {
        height: 24, width: 24, resizeMode: 'contain'
    },
    heading: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        color: Colors.GRAY3
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        // paddingHorizontal: '5%',
        // paddingVertical: '3%'
        padding: '5%'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    listTitle: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    arrowIcon: {
        width: 9,
        height: 14,
        resizeMode: 'contain',
        tintColor: Colors.GRAY2
    },
    socialIconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%'
    },
    logoutButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    logout: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5,
        color: Colors.GRAY3,
    },
    registerButton: {
        backgroundColor: Colors.themeColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // margin: 10,
        borderRadius: 100,
    },
    register: {
        color: Colors.WHITE,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 600,
        letterSpacing: 0.5
    },

})