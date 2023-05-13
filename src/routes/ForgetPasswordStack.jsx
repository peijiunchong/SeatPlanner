import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import UpdatePasswordScreen from '../screens/UpdatePasswordScreen';

const Stack = createStackNavigator();

const ForgetPasswordStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
    >
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen}/>
        <Stack.Screen name="VerifyEmail" component={UpdatePasswordScreen}/>
    </Stack.Navigator>
  )
}

export default ForgetPasswordStack