import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { useAuth } from '../contexts/Auth'

const HomeScreen = () => {

  const {signOut} = useAuth();

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => signOut()}
      >
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen