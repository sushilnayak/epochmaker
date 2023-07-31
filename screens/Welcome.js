import {LinearGradient} from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import {Image, Pressable, Text, View} from 'react-native'

const Welcome = ({navigation}) => {
    return <LinearGradient
        style={{
            flex: 1
        }}
        colors={[COLORS.white, COLORS.white]}
    >
        <View style={{flex: 1}}>
            <View>
                <Image
                    source={require("../assets/pound_sign.png")}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: 10,
                        transform: [
                            {translateX: 20},
                            {translateY: 50},
                            {rotate: "-15deg"}
                        ]
                    }}
                />

                <Image
                    source={require("../assets/pound_sign.png")}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: -30,
                        left: 100,
                        transform: [
                            {translateX: 50},
                            {translateY: 50},
                            {rotate: "-5deg"}
                        ]
                    }}
                />

                <Image
                    source={require("../assets/pound_sign.png")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: 130,
                        left: -50,
                        transform: [
                            {translateX: 50},
                            {translateY: 50},
                            {rotate: "15deg"}
                        ]
                    }}
                />

                <Image
                    source={require("../assets/pound_sign.png")}
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: 20,
                        position: "absolute",
                        top: 110,
                        left: 100,
                        transform: [
                            {translateX: 50},
                            {translateY: 50},
                            {rotate: "-15deg"}
                        ]
                    }}
                />
            </View>

            {/* content  */}

            <View style={{
                paddingHorizontal: 22,
                position: "absolute",
                top: 300,
                width: "100%"
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: COLORS.primary
                }}>Let's Get</Text>
                <Text style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: COLORS.primary
                }}>Started</Text>

                <View style={{marginVertical: 22}}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 4
                    }}>Connect all your banking accounts to get unified view, recommendations & more</Text>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                    }}>From high-interest savings accounts to credit cards with brilliant cash back rewards, we find
                        options that’ll seriously boost your financial game.</Text>
                </View>

                <Button
                    title="Join Now"
                    filled
                    onPress={() => navigation.navigate("Signup")}
                    style={{
                        marginTop: 22,
                        width: "100%"
                    }}
                />

                <View style={{
                    flexDirection: "row",
                    marginTop: 12,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 4
                        }}>Login</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    </LinearGradient>
}
export default Welcome
