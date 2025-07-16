import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './Routes';
import Home from './../android/Screens/Home/Home';
import SingleDonationItem from '../android/Screens/SingleDonationItem/SingleDonation';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
