import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import globalStyle from '../../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backbutton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header title={'Hello and Wellcome !'} type={1} />
        </View>

        <View>
          <Input
            // secureTextEntry={true}
            label={'First & Last Name'}
            placeholder={'Enter your full name'}
            onChangeText={value => setFullName(value)}
          />
          <Input
            label="Email"
            placeholder="exmple@doantion.com"
            secureTextEntry={true}
            keyboardType="email-address"
            onChangeText={value => setEmail(value)}
          />
          <Input
            label="Password"
            placeholder="*********"
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Registration'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
