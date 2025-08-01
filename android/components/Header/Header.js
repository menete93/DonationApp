import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import style from './style';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text
          style={[styleToApply(), props.color && { color: props.color }]}
          numberOfLines={props.numberOfLines ? props.numberOfLines : null} //este operador ternario e para assegurar que onde for usado esse hearder caso nao seja passado o numberOflines ele assuma null por default
        >
          {props.title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#000000',
};

Header.PropTypes = {
  title: PropTypes.string,
  tyle: PropTypes.number,
  numberOfLines: PropTypes.number,
};

export default Header;
