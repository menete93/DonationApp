import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../assets/styles/scaling';
import getFontFamily from '../../../assets/helper';

const style = StyleSheet.create({
  backButtonStyle: {
    marginTop: 50,
  },
  image: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginRight: 90,
    width: '100% ',
    height: verticalScale(240),
    borderRadius: horizontalScale(10),
  },

  containerImg: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: horizontalScale(20), // <<< espaçamento interno lateral
  },
  badge: {
    marginBottom: verticalScale(16),
    marginHorizontal: 25,
  },
  hearder: {
    marginTop: verticalScale(-30),
  },
  description: {
    fontSize: 16,
    fontFamily: getFontFamily(2, 500),
    // textAlign: 'left',
    // justifyContent: 'center',
    marginTop: verticalScale(-15),
    marginHorizontal: horizontalScale(20),
  },
  button: {
    marginHorizontal: horizontalScale(20),
    paddingVertical: 20,
  },
});

export default style;
