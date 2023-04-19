import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../context/AuthContext';

const Login = ({setEmail, setPassword, handleLogin}) => {

  const { login, promptAsync, request } = useContext(AuthContext)

  return (
    <View  style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View>
          <TextInput
            value=""
            onChange={(value) => setEmail(value)}
            placeholder='xxx@gmail.com'
          />

          <TextInput
            value=""
            onChange={(value) => setPassword(value)}
            placeholder='password'
          />

          <TouchableOpacity onPress={login}>
            <Text>Login</Text>
          </TouchableOpacity>

          <Text>Or continue with </Text>

          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {promptAsync()}} disabled={!request}>
              <Icon name='google' size={20} color="#900"/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name='facebook-official' size={20} color="#900"/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name='apple' size={20} color="#900"/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Login