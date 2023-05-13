import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useAuth } from '../contexts/Auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleShowPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const {signIn, error} = useAuth();

  return (
    <View
      style={{
        flex:1,
        padding: 5,
        justifyContent: 'center'
      }}
    >
      <Text style={{
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: "#003F88"
      }}>Log In Now</Text>

      <Text style={{
        justifyContent: 'center',
        textAlign: 'center',
        color: "#6c757d",
        paddingTop: 5
      }}>Please Log In to continue using our app</Text>
      
      <View
        style={{
          justifyContent:'center',
          alignItems:'center',
          marginTop: 40,
        }}
      >
        <View style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          width: "85%",
          height: 50,
          marginBottom: 15,
        }}>
          <TextInput
            style={{
              height: 50,
              flex: 1,
              padding: 5,
              marginLeft: 15,
            }}
            value={email}
            placeholder="test@gmail.com"
            onChangeText={(email) => setEmail(email)}
            /> 
        </View> 
        <View style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          width: "85%",
          height: 50,
          marginBottom: 15,
          flexDirection: 'row'
        }}>
          <TextInput
            style={{
              height: 50,
              flex: 1,
              padding: 5,
              marginLeft: 15,
            }}
            placeholder="password"
            secureTextEntry={secureTextEntry}
            onChangeText={(password) => setPassword(password)}
          /> 

          <TouchableOpacity
            style={{justifyContent:'center', marginRight: 15}}
            onPress={() => handleShowPassword()}
          >
            {
              secureTextEntry ? <Ionicons name='eye-off-outline' size={20}/> : <Ionicons name='eye-outline' size={20}/>
            }
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{justifyContent:'flex-start', alignItems: 'flex-end'}}
        >
        <TouchableOpacity
          style={{marginRight: 25, marginBottom: 30}}
          onPress={() => navigation.navigate('ForgetPasswordStack')}
          >
          <Text style={{
            fontSize: 12,
            color: '#00509D',
            opacity: 0.5,
            textDecorationLine: 'underline',
          }}>Forgot Password?</Text> 
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <TouchableOpacity style={{
          width:"85%",
          borderRadius:10,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"#003F88",
          opacity: 0.9,
          marginBottom: 15
        }}
          onPress={() => signIn(email, password)}
        >
          <Text style={{letterSpacing: 5, color: '#fff'}}>LOGIN</Text> 
        </TouchableOpacity>
      </View>
    
      <View
        style={{
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <View style={{flexDirection: 'row'}}>
          <Text style={{textAlign:'center'}}>Don't have an account?&nbsp; &nbsp;</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
            <Text style={{textDecorationLine: 'underline', color: '#00509D', opacity: 0.5, textAlign: 'center'}}> Sign up here</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', margin:10, marginTop: 40}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#00509D'}} />
          <View>
            <Text style={{width: 125, textAlign: 'center'}}>Or Connect With</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#00509D'}} />
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{margin: 10, borderRadius: 20, width: 65, alignItems:'center', padding:10}}
          >
            <FontAwesome name='google' size={30} color="#c1121f"/>
          </TouchableOpacity>

          <TouchableOpacity
            style={{margin: 10, borderRadius: 20, width: 65, alignItems:'center', padding:10}}
          >
            <FontAwesome name='facebook' size={30} color="#00509D"/>
          </TouchableOpacity>

          <TouchableOpacity
            style={{margin: 10, borderRadius: 20, width: 65, alignItems:'center', padding:10}}
          >
            <FontAwesome name='apple' size={30}/>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  )
}

export default SignInScreen