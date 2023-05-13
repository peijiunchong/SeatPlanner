import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/logo.jpg'

const StarterScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
      <View style={{top:5}}>
        <Image source={logo} style={{width: 350, height: 350, borderRadius:10}}/>
      </View>
      <View style={{width: '75%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Discover your one and only planner Here</Text>
      </View>
      <View style={{bottom:20, width: '75%', marginTop: 20}}>
        <TouchableOpacity 
          style={{backgroundColor: '#98AFC7', padding:12,  borderRadius: 50}}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{fontWeight: 'bold', letterSpacing: 5, fontSize: 18, color: 'white', textAlign: 'center'}}>LET'S BEGIN!!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StarterScreen