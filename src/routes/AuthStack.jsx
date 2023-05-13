import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StarterScreen from '../screens/StarterScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgetPasswordStack from './ForgetPasswordStack';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
    >
        <Stack.Screen name="Starter" component={StarterScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ForgetPasswordStack" component={ForgetPasswordStack}/>
    </Stack.Navigator>
  )
}

export default AuthStack