import {Image, Linking, ScrollView, Text, View} from "react-native";
import COLORS from "../constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../components/Button";


const Recommendation = () => {
    return <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{flex: 1, marginHorizontal: 22}}>

                <View style={{marginVertical: 22, marginBottom: 10}}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Reward Black credit card
                    </Text>
                    <Image source={require("../assets/nwb_reward_black.png")}/>

                </View>
                <View>
                    <Text style={{marginBottom: 10}}>{`\u2043 Good for - Rewards at home and abroad`}</Text>
                    <Text
                        style={{marginBottom: 10}}>{`\u2043 No foreign transaction fee (no fee on purchases abroad with this card).`}</Text>
                    <Text
                        style={{marginBottom: 10}}>{`\u2043 Earn 1% back in Rewards on supermarket spending (0.5% at supermarket petrol stations and everywhere else).`}</Text>
                    <Text style={{marginBottom: 10, fontStyle: "italic", fontWeight: "bold"}}>* Annual fee refunded if
                        you have a Reward Black account.</Text>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 10}}>Conditions</Text>
                    <Text style={{fontSize: 14}}>To apply, you must be a UK resident, aged 18+ and earning at least £15K
                        per year</Text>
                </View>
                <View>
                    <Button filled title={"Apply Now"} onPress={async (e) => {
                        await Linking.openURL("https://www.natwest.com/credit-cards/reward-black-credit-card.html")
                    }} style={{
                        marginTop: 22,
                        width: "100%"
                    }}/>
                    <Text style={{marginTop: 10, marginBottom: 10}}>On clicking above link you will be redirected to
                        Natwest website</Text>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
}
export default Recommendation
