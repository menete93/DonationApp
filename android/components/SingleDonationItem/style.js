import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(180),
    height: verticalScale(170),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(6),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
