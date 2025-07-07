import React from 'react';
import style from './style';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMethod="contain"
          source={{ uri: props.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
      </View>
      <View style={style.price}>
        <Header
          title={'$' + props.price.toFixed(2)}
          type={3}
          color={'#156CF7'}
        />
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
