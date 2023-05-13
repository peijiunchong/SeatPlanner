import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Forget Password?</Text>
        <Text>Enter your email address</Text>
        <TextInput 
            placeholder='email address'
            style={{backgroundColor: 'white', height:50, width:280}}
        />

        <TouchableOpacity
            onPress={() => navigation.navigate('VerifyEmail')}
        >
            <Text>NEXT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ForgetPasswordScreen