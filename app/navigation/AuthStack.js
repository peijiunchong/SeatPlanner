import { Login } from "../../screens";
import { Stack } from "expo-router";
import { View } from "react-native";

const AuthStack = () => {
    return (
      <View>
        <Stack.Screen options={{
          headerTitle: "APPSTACK"
        }}/>

        <Login />

      </View>
    );
};

export default AuthStack;