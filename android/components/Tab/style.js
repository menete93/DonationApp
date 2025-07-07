import { StyleSheet } from 'react-native';
import getFontFamily from '../../../assets/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/scaling';
const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontFamily: getFontFamily(2, 500),
    fontSize: scaleFontSize(14),
    alignSelf: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
