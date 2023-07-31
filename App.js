import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import Recommendation from "./screens/Recommendation";

const Stack = createNativeStackNavigator();

export default function App() {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Welcome"} component={Welcome} options={{}}/>
            <Stack.Screen name="Login" component={Login} options={{}}/>
            <Stack.Screen name="Signup" component={Signup} options={{}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{}}/>
            <Stack.Screen name="Recommendation" component={Recommendation} options={{headerShown: false}}/>
            {/*<Stack.Screen name="OfferDetail" component={OfferDetail} options={{ headerShown: false  }} />*/}
        </Stack.Navigator>
    </NavigationContainer>
    // return (
    //   <View style={styles.container}>
    //     <Text>EPOch Maker</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // );
}
