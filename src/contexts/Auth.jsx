import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as KeyChain from 'react-native-keychain'
import axios from 'axios';

const baseURL = "http://10.0.2.2:3000/api/v1"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadStorageData();
  }, [authData]);

  async function loadStorageData() {
    try {
      setLoading(true)
      //Try get the data from keychain
      const credentials = await AsyncStorage.getItem('@AuthData');
      if (credentials) {
        // console.log(
        //   'Credentials successfully loaded for user ' + credentials.userId
        // );
        setAuthData(credentials);
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async (email, password, username) => {
  };

  const signIn = async (email, password) => {
    setLoading(true);
    await axios.post(`${baseURL}/login`, {
        "email": `${email}`,
        "password": `${password}`
      })
      .then(res => {
        setAuthData(res.data.token);
        setLoading(false);
        AsyncStorage.setItem('@AuthData', res.data.token)
      })
      .catch(err => {
        setError(err.response.data.error);
      })

    // if(authData) {
    //   await KeyChain.setGenericPassword(res.data.userId, res.data.token)
    //       .then(result => {result})
    //       .catch(err => console.log(err))
    // }
  }

  const signOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('@AuthData');
    setAuthData(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut, signUp, error}}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
