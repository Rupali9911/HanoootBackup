import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import Images from '../../../constant/Images';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import PolicyView from './PolicyView';
import { translate } from '../../../utility';
import { getFonts } from '../../utils';
import { useDispatch, useSelector } from 'react-redux'


const LegalPolicies = () => {

    const navigation = useNavigation();
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    const ListItem = (props) => {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>{props.Text}</Text>
                        <TouchableOpacity style={styles.arrowContainer} onPress={props.onPress}>
                            <Image
                                source={Images.ForwardIcon}
                                style={[styles.arrowIcon, { transform: [{ rotate: selectedLanguageItem?.language_id === 0 ? '0deg' : '180deg' }] }]}
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
                title={translate('common.legalandpolicies')}
            />
            <ListItem
                Text={translate('common.termsNconditions')}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: translate('common.termsNconditions'), url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={translate('common.privacypolicy')}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: translate('common.termsNconditions'), url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={translate('common.warrantypolicy')}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: translate('common.warrantypolicy'), url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={translate('common.returnpolicy')}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: translate('common.returnpolicy'), url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
                }}
            />
            <ListItem
                Text={translate('common.sellwithus')}
                onPress={() => {
                    navigation.navigate('PolicyWebViewScreen', { HeadingTitle: translate('common.sellwithus'), url: 'https://www.sentrypc.com/privacy.htm?gad=1&gclid=EAIaIQobChMItcXAir6IgAMVEheDAx1zzw2jEAAYAiAAEgJFDPD_BwE' })
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
        fontFamily: getFonts.SEMI_BOLD,
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