
import { Image, StyleSheet, Text, View } from 'react-native'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Images from '../../../constant/Images'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={styles.baseToastStyle}
            contentContainerStyle={styles.baseContainer}
            text1Style={styles.baseText}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={styles.txtError}
            text2Style={styles.txtError1}
            text2NumberOfLines={1}
        />
    ),
    info: ({ text1, props }) => (
        <View style={styles.msgContaniner}>
            <Image source={props.imageType == 'SUCCESS' ? Images.ToastSuccess : props.imageType === 'REMOVE' ?  Images.deleteIcon : Images.Eye} style={styles.img} />
            <View>
                <Text style={styles.msgText}>{props.text1}</Text>
                {
                    props.text2 && <Text style={styles.msgText}>{props.text2}</Text>
                }
            </View>
        </View>
    )
};

export const showInfoToast = (imageType, message1, message2) => {
    Toast.show({
        type: 'info',
        props: {
            // image: props.imgType,
            // text1: props?.message ? props?.message : 'Hello'

            imageType: imageType,
            text1: message1 ? message1 : null,
            text2: message2 ? message2 : null
        }
    });
}

export const showSuccessToast = (title, message) => {
    Toast.show({
        type: 'success',
        text1: title ? title : 'Success',
        text2: message ? message : 'Action successfull',
    });
}

export const showErrorToast = (title, message) => {
    Toast.show({
        type: 'error',
        text1: title ? title : 'Error',
        text2: message ? message : 'Something went wrong',
    });
}

export default AppToast = () => {
    return (
        <Toast
            config={toastConfig}
            position="bottom"
            visibilityTime={3000}
            autoHide={true}
        />
    )
}

const styles = StyleSheet.create({
    msgContaniner: {
        height: 60,
        width: '90%',
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 20,
        alignItems: 'center',
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        zIndex: 1
    },
    msgText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5
    },
    img: {
        height: 20,
        width: 20
    },
    baseContainer: {
        paddingHorizontal: 15
    },
    baseToastStyle: {
        borderLeftColor: 'pink'
    },
    baseText: {
        fontSize: 15,
        fontWeight: '400'
    },
    txtError: {
        fontSize: 17
    },
    txtError1: {
        fontSize: 15
    }
})