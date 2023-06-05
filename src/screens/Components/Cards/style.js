import { StyleSheet } from "react-native/types";
import Colors from "../../../constant/Colors";

const styles = StyleSheet.create({
    cardView: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        // borderRadius: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        // marginBottom: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
  });
  
  export default styles;
  