import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import globalStyle from '../../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../../Navigation/Routes';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, 'email');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header title={'Wellcome Back '} type={1} />
        </View>

        <View>
          <Input
            // secureTextEntry={true}
            keyboardType="email-address"
            label={'Email'}
            placeholder={'Enter your email... '}
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
          <Button title={'login'} />
        </View>
        <Pressable
          style={style.newaccount}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header
            title={"Don't have an account? "}
            type={3}
            color={'#156CF7'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
