import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useAuth } from '../contexts/Auth';
import { KeyboardAvoidingView } from 'react-native';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn, error} = useAuth();

  return (
      <KeyboardAvoidingView
        style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
          <Text style={{
            justifyContent: 'center',
            textAlign: 'center'
          }}>Welcome Again!</Text>
          
          <View style={{
            backgroundColor: "#fff",
            borderRadius: 30,
            width: "75%",
            height: 45,
            marginBottom: 20,
            marginTop: 20,
          }}>
            <TextInput
              style={{
                height: 50,
                flex: 1,
                padding: 10,
                marginLeft: 20,
              }}
              value={email}
              placeholder="Enter your email"
              onChangeText={(email) => setEmail(email)}
              /> 
          </View> 
            {error?.type === "request_validation" ? <Text>Email must match format email</Text> : <></>}
          <View style={{
            backgroundColor: "#fff",
            borderRadius: 30,
            width: "75%",
            height: 45,
            alignItems: "flex-start",
          }}>
            <TextInput
              style={{
                height: 50,
                flex: 1,
                padding: 10,
                marginLeft: 20,
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            /> 
          </View>
            {error?.type === "invalid_credentials" ? <Text>Invalid Credentials</Text> : <></>}

          <View
            style={{justifyContent:'flex-start', alignItems: 'flex-start'}}
            >
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPasswordStack')}
              >
              <Text style={{
                marginTop: 10,
                fontSize: 12,
                color: 'grey',
                textDecorationLine: 'underline',
              }}>Forgot Password?</Text> 
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{
            width:"75%",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:20,
            backgroundColor:"#98AFC7",
          }}
            onPress={() => signIn(email, password)}
          >
            <Text style={{letterSpacing: 5, color: '#fff'}}>LOGIN</Text> 
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row', alignItems: 'center', margin:10, marginTop: 50}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
            <View>
              <Text style={{width: 125, textAlign: 'center'}}>Or Continue With</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
          </View>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              style={{margin: 20, borderRadius: 20, borderColor: "#fff", width: 65, alignItems:'center', borderWidth:2, padding:10}}
            >
              <Icon name='google' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={{margin: 20, borderRadius: 20, borderColor: "#fff", width: 65, alignItems:'center', borderWidth:2, padding:10}}
            >
              <Icon name='facebook' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={{margin: 20, borderRadius: 20, borderColor: "#fff", width: 65, alignItems:'center', borderWidth:2, padding:10}}
            >
              <Icon name='apple' size={30}/>
            </TouchableOpacity>
          </View>

          <View>
            <Text>No Account? <Link to={{screen: 'SignUp'}} style={{textDecorationLine: 'underline'}}>Sign up here</Link></Text>
          </View>
      </KeyboardAvoidingView>
  )
}

export default SignInScreen