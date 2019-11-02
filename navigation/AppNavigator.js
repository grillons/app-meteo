import { createSwitchNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';

//const AppStack = createStackNavigator({ Home: HomeScreen });
//const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });
const AppStack = createBottomTabNavigator({ Home: HomeScreen, SignIn: IntroFormScreen });
const AuthStack = createBottomTabNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
