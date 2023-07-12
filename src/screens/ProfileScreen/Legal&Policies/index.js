import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import Images from '../../../constant/Images';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import PolicyView from './PolicyView';

const LegalPolicies = () => {

    const navigation = useNavigation();

    const ListItem = (props) => {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>{props.Text}</Text>
                        <TouchableOpacity style={styles.arrowContainer} onPress={props.onPress}>
                            <Image
                                source={Images.ForwardIcon}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }



    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Legal and Policies'}
            />
            <ListItem
                Text={'Terms & Conditions'}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: 'Terms & Conditions', url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={'Privacy Policy'}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: 'Privacy Policy', url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={'Warranty Policy'}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: 'Warranty Policy', url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={'Return Policy'}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: 'Return Policy', url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={'Sell with us'}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: 'Sell with us', url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
        </AppBackground>
    )
}

export default LegalPolicies;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.3
    },
    termsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    termsText: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5
    },
    arrowContainer: {
        width: 25,
        height: 25,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    arrowIcon: {
        width: 10,
        height: 14,
        resizeMode: 'contain'
    }
})