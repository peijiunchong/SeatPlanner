import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ActivityIndicator, Text, View } from 'react-native';


export const AppNav = () => {

    const { authToken, loading } = useContext(AuthContext);

    if (loading) {
        return <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        <View>
            {authToken ? <AppStack /> : <AuthStack />}
        </View>
    );
};