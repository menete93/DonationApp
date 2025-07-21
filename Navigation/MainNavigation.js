import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './Routes';
import Home from './../android/Screens/Home/Home';
import SingleDonationItem from '../android/Screens/SingleDonationItem/SingleDonation';
import Login from '../android/Screens/Login/Login';
import Registration from '../android/Screens/Registration/Registration';

const Stack = createStackNavigator();
export const NonAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={Routes.Login} component={Login} />

      <Stack.Screen name={Routes.Registration} component={Registration} />

      {/* <Stack.Screen name={Routes.Home} component={Home} /> */}
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
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
