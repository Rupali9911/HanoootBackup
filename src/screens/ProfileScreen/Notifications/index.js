import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import ToggleSwitch from 'toggle-switch-react-native'

const Notification = () => {
    
    const CustomToggleSwitch = (props) => {
        const [isEnabled, setIsEnabled] = useState(false);

        const toggleSwitch = (toggle) => {
            setIsEnabled(toggle)
            props.setToggle(toggle)
        }

        return (
                <ToggleSwitch
                    isOn={isEnabled}
                    onColor={Colors.themeColor}
                    offColor={Colors.GRAY}
                    size='medium'
                    onToggle={(isOn) => toggleSwitch(isOn)}
                />
        );
    };

    const ListItems = (props) => {
        return(
            <View style={styles.listContainer}>
                <View>
                    <Text style={styles.notify}>{props.title}</Text>
                    <Text style={styles.notifyDesc} >{props.desc}</Text>
                </View>
                <CustomToggleSwitch 
                    setToggle={props.getToggleValue}
                />
            </View>
        );
    }

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Notification Preferences'}
            />

            <Text style={styles.topLine}>Get Notification from Hanooot on your mobile</Text>

            <ListItems 
            title={'My Orders'}
            desc={'Latest updates on your orders'}
            // getToggleValue={(toggle) => console.log('Check First Toggle Value : ', toggle)}    
            />
            <ListItems 
            title={'Reminder'}
            desc={'Price drops, Back-in-stock products, etc'}
            // getToggleValue={(toggle) => console.log('Check Second Toggle Value : ', toggle)} 
            />
            <ListItems 
            title={'New Offers'}
            desc={'Top deals, offers & more'}  
            // getToggleValue={(toggle) => console.log('Check THIRD Toggle Value : ', toggle)} 
            />
            <ListItems 
            title={'Hanooot Community'}
            desc={'Profile updates, communication, news'}
            // getToggleValue={(toggle) => console.log('Check FOURTH Toggle Value : ', toggle)} 
            />
            <ListItems 
            title={'Feedback & Review'}
            desc={'Ratings and reviews of your purchase'}
            // getToggleValue={(toggle) => console.log('Check FIVE Toggle Value : ', toggle)}   
            />
        </AppBackground>
    )
}

export default Notification

const styles = StyleSheet.create({
    topLine: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        margin: '5%'
    },
    listContainer: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: '5%',
        paddingVertical: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.3
    },
    notify: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
        fontSize: 16
    },
    notifyDesc: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        fontSize: 12,
        color: Colors.GRAYDARK
    }
})
