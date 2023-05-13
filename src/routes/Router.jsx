import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import { ActivityIndicator } from "react-native";

export const Router = () => {

    const {authData, loading} = useAuth();

    if(loading) {
        return (
            <ActivityIndicator size="large" style={{flex:1, justifyContent:"center", alignItems:"center"}}/>
        )
    }

    return (
        <NavigationContainer>
            {authData ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    )
}