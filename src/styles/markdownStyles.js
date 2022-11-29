import {StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../colors";

const Markdownstyles = StyleSheet.create({
    heading1: {
      fontSize: 32,
      backgroundColor: '#000000',
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    heading2: {
      fontSize: 24,
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    heading3: {
      fontSize: 18,
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    heading4: {
      fontSize: 16,
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    heading5: {
      fontSize: 13,
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    heading6: {
      fontSize: 11,
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
    },
    text: {
        color: COLORS.White,
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
    },

    link: {
        color: COLORS.BlueTabCoins,
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
    },

    list_item: {
        color: COLORS.White,
        fontFamily: 'Roboto-Bold',
    },

    blockquote: {
        backgroundColor: COLORS.DarkGray
    }
  });

  export default Markdownstyles;