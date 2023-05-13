import React from 'react'
import { Text, TextInput, View } from 'react-native'

const VerifyEmailScreen = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Verification</Text>
        <Text>Enter verification code</Text>
        <TextInput 
            placeholder='email address'
            style={{backgroundColor: 'white', height:50, width:280}}
        />
    </View>
  )
}

export default VerifyEmailScreen