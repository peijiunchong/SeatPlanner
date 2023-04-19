import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext, useEffect} from 'react';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();


export const AuthContext = createContext();

export const AuthProvider= ({children}) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userinfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = AuthSession.useAuthRequest({
    expoClientId: "302954250930-3udfgskufjrgfv177ag6rlqq1f9bahqs.apps.googleusercontent.com",
    androidClientId: '302954250930-7m4nmef9rl9ubkhmb4smfaogq5oqqg6c.apps.googleusercontent.com',
  });

  const login = async () => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    setLoading(true);
    // const _authData = await authService.signIn(
    //   'lucasgarcez@email.com',
    //   '123456',
    // );
    const _authToken = '123456'

    setAuthData(_authToken);
    AsyncStorage.setItem('userToken', _authToken)
    setLoading(false);
  };

  const signout = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setLoading(true);
    setAuthToken(undefined);
    AsyncStorage.removeItem('userToken')
    setLoading(false);
  };

  const signupGoogle = () => {
    setLoading(true);

    if (response?.type === "success") {
        setAuthToken(response.authentication.accessToken);
        console.log(response);
        setLoading(false)
    }
  }

  const signupFacebook = () => {

  }

  const signupApple = () => {

  }

  const isLoggedIn = async () => {
    try {
        setLoading(true)
        let userToken = await AsyncStorage.getItem('userToken');
        setAuthToken(userToken);
    } catch (error) {
        setLoading(false)
        console.log(`Error fetching user token from async storage, ${error}`);
    } finally {
        setLoading(false)
    }
  }

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  useEffect(() => {
    signupGoogle();
  }, [response, authToken])

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authToken, loading, login, signout, promptAsync, request}}>
      {children}
    </AuthContext.Provider>
  );
};