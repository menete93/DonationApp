import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View, Text } from 'react-native';
import globalStyle from '../../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../../Navigation/Routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../../components/Search/redux/reducers/Users';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'login'}
            isDisabled={email.length < 5 || password.length < 5}
          />
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
