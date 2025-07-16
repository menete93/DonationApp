import React from 'react';
import style from './style';
import { useSelector } from 'react-redux';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  ViewBase,
  Text,
} from 'react-native';
import globalStyle from '../../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInformation;
  console.log(route.params, 'VERIFY');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={style.containerImg}>
          <Image
            source={{ uri: donationItemInformation.image }}
            style={style.image}
          />
        </View>
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <View style={style.hearder}>
          <Header type={1} title={donationItemInformation.name} />
        </View>
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
