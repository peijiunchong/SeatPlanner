import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

const Home = () => {

  const {signout} = useContext(AuthContext);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>HOME</Text>
      <Button title="Sign Out" onPress={signout} />
    </View>
  )
}

export default Home