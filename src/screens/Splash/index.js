import { Image, View } from 'react-native';
import style from './style';
const splashSource = require('../../assets/images/splash.png')

const Splash = () => {
    return (
        <View
            style={style.mainView}
        >
            <Image
                source={splashSource}
                style={style.img}
            />
        </View>
    );

}
export default Splash