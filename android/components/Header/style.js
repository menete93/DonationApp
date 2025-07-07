import { StyleSheet } from 'react-native';
import getFontFamily from '../../../assets/helper';
import { scaleFontSize } from './../../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily(3, 600),
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(29),
  },

  title2: {
    fontFamily: getFontFamily(3, 600),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(27),
  },

  title3: {
    fontFamily: getFontFamily(3, 600),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(25),
  },
});

export default style;
