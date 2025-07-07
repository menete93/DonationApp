import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './Routes';
import Home from './../android/Screens/Home/Home';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
