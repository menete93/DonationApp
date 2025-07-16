import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(24),
    // flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingBottom: verticalScale(150),
    marginVertical: verticalScale(24),
  },
  newaccount: {
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center', // centraliza horizontalmente
  },
  backbutton: {},
});

export default style;
