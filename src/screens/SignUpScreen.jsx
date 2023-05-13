import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const SignUpScreen = ({navigation}) => {
  return (
    <View>

      <Text>SignUpScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen