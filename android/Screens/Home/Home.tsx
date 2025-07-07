import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import globalStyle from '../../../assets/styles/globalStyle';
import { RootState } from '../../components/Search/redux/reducers/store';
import { updateFirstName } from '../../components/Search/redux/reducers/Users';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({ firstName: 'N' }))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
