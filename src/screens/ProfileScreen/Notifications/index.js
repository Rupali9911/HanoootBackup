import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import ToggleSwitch from 'toggle-switch-react-native'

const Notification = () => {
    const [myOrderToggle, setMyOrderToggle] = useState(false);
    const [reminderToggle, setReminderToggle] = useState(false);
    const [newOfferToggle, setNewOfferToggle] = useState(false);
    const [hanoootToggle, setHanoootToggle] = useState(false);
    const [reviewToggle, setReviewToggle] = useState(false);


    const ListItems = (props) => {
        return(
            <View style={styles.listContainer}>
                <View>
                    <Text style={styles.notify}>{props.title}</Text>
                    <Text style={styles.notifyDesc} >{props.desc}</Text>
                </View>
                <ToggleSwitch
                    isOn={props.toggle}
                    onColor={Colors.themeColor}
                    offColor={Colors.GRAY}
                   
                    onToggle={props.onToggle}
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

            {/* <View style={styles.listContainer}>
                <View>
                    <Text style={styles.notify}>My Orders</Text>
                    <Text style={styles.notifyDesc} >Latest updates on your orders</Text>
                </View>
                <ToggleSwitch
                    isOn={toggle}
                    onColor={Colors.themeColor}
                    offColor={Colors.GRAY}
                   
                    onToggle={isOn => {
                        setToggle(isOn)
                        console.log("changed to : ", isOn)}}
                />
            </View> */}

            <ListItems 
            title={'My Orders'}
            desc={'Latest updates on your orders'}
            toggle={myOrderToggle}
            onToggle={setMyOrderToggle}    
            />
            <ListItems 
            title={'Reminder'}
            desc={'Price drops, Back-in-stock products, etc'}
            toggle={reminderToggle}
            onToggle={setReminderToggle}   
            />
            <ListItems 
            title={'New Offers'}
            desc={'Top deals, offers & more'}
            toggle={newOfferToggle}
            onToggle={setNewOfferToggle}   
            />
            <ListItems 
            title={'Hanooot Community'}
            desc={'Profile updates, communication, news'}
            toggle={hanoootToggle}
            onToggle={setHanoootToggle}   
            />
            <ListItems 
            title={'Feedback & Review'}
            desc={'Ratings and reviews of your purchase'}
            toggle={reviewToggle}
            onToggle={setReviewToggle}   
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
        paddingVertical: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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