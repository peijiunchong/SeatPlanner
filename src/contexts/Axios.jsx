import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuth } from './Auth';
import * as KeyChain from 'react-native-keychain';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

export const AxiosContext = createContext();

export const AxiosProvider = ({children}) => {

    const authContext = useAuth();

    const authAxios = axios.create({
        baseURL: 'http://localhost:3000/api/v1',
    });

    const publicAxios = axios.create({
        baseURL: 'http://localhost:3000/api/v1',
    });

    // intercept requests or responses before they are handled by then or catch.
    // We use an interceptor to send the access token in the Authorization header.
    authAxios.interceptors.request.use(
        // Do something before request is sent
        config => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
            }

            return config;
        },
        // Do something with request error
        error => {
            return Promise.reject(error);
        },
    );

    // const refreshAuthLogic = async (failedRequest) => {
    //     const data = {
    //         refreshToken: authContext.authState.refreshToken,
    //     };
    
    //     const options = {
    //         method: 'POST',
    //         data,
    //         url: 'http://localhost:3000/api/refreshToken',
    //     };

    //     return axios(options)
    //         .then(async tokenRefreshResponse => {
    //                 failedRequest.response.config.headers.Authorization =
    //                 'Bearer ' + tokenRefreshResponse.data.accessToken;

    //                 authContext.setAuthState({
    //                 ...authContext.authState,
    //                 accessToken: tokenRefreshResponse.data.accessToken,
    //             });

    //             await KeyChain.setGenericPassword(
    //                 'token',
    //                 JSON.stringify({
    //                     accessToken: tokenRefreshResponse.data.accessToken,
    //                     refreshToken: authContext.authState.refreshToken,
    //                 }),
    //             );

    //             return Promise.resolve();
    //         })
    //         .catch(e => {
    //             authContext.setAuthState({
    //                 accessToken: null,
    //                 refreshToken: null,
    //             });
    //         });
    // }

    // createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {})


    return (
        <AxiosContext.Provider value={{authAxios, publicAxios}}>
            {children}
        </AxiosContext.Provider>
    );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
export const useAxios = () => {
  const context = useContext(AxiosContext);

  if (!context) {
    throw new Error('useAxios must be used within an AxiosContext');
  }

  return context;
}
