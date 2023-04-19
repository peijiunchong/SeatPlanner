import { Home } from '../../screens';
import { Stack } from "expo-router";
import { View } from 'react-native';

const AppStack = () => {
    return (
      <View>
        <Stack.Screen options={{
          headerTitle: "APPSTACK"
        }}/>

        <Home />

      </View>
    );
};

export default AppStack;