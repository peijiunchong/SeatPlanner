import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/logo-removebg-preview.png'

const StarterScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', padding: 5}}>
      <View style={{top:5}}>
        <Image source={logo} style={{width: 250, height: 250, borderRadius:10}}/>
      </View>
      <View style={{width: '80%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: "#00509D"}}>Welcome</Text>
        <Text style={{fontSize: 15, textAlign: 'center', color: "#6c757d"}}>Create an account and access thousand of cool stuffs</Text>
      </View>
      <View style={{bottom:20, width: '99%', marginTop: 20}}>
        <TouchableOpacity 
          style={{backgroundColor: '#003F88', padding:12,  borderRadius: 10, opacity: 0.9}}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{fontWeight: 'bold', letterSpacing:3, fontSize: 18, color: '#fff', textAlign: 'center'}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StarterScreen