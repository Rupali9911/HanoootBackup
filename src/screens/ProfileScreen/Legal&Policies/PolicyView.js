import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import { WebView } from 'react-native-webview';
import Colors from '../../../constant/Colors';

const PolicyView = (props) => {
    const [visible, setVisible] = useState(true);
    const uri = props.route.params.url;


    const IndicatorLoadingView = () => {
        return (
            <View style={styles.activityIndicatorStyle}>
                <ActivityIndicator
                    color={Colors.themeColor}
                    size="large"
                />
            </View>
        );
    }


    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={props.route.params.HeadingTitle}
            />

            <View style={styles.container}>
                <WebView
                    style={{ flex: 1 }}
                    source={{ uri: uri }}
                    javaScriptEnabled={true}                  
                    domStorageEnabled={true}
                    onLoadStart={() => setVisible(true)}
                    onLoad={() => setVisible(false)}
                />
                {visible ? <IndicatorLoadingView /> : null}
            </View>
        </AppBackground>

    )
}

export default PolicyView

const styles = StyleSheet.create({
    

    container: {
        
        flex: 1,
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: Colors.GRAY,
    },
})
