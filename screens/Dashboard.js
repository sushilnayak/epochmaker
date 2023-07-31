import {Image, ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native'
import COLORS from "../constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";
import List from "../components/List";
import {useEffect, useState} from "react";

const availableFundsList = {
    name: "Available Funds",
    type: "positive",
    items: [
        {name: "Natwest Bank", amount: 10683.00},
        {name: "Barclays Bank", amount: 5387.00},
        {name: "HSBC", amount: 7806.00},
    ],
};

const spendsList = {
    name: "Spends this month",
    type: "negative",
    items: [
        {name: "Currys", amount: 182.32},
    ],
};

const Dashboard = ({navigation}) => {
    const [recommendations, setRecommendations] = useState([])
    useEffect(() => {
        fetch("https://brave-smile-394216.de.r.appspot.com/offers").then(x => x.json()).then(x => setRecommendations(x))
    }, []);
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
                <View style={{flex: 1, marginHorizontal: 22}}>
                    <View style={{marginVertical: 22, marginBottom: 0}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black
                        }}>
                            Hi Richard
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Your finances are doing great today!</Text>
                    </View>
                    <View>
                        <List list={availableFundsList}/>
                        <List list={spendsList}/>
                    </View>

                    <View style={{paddingTop: 30}}>
                        <Text style={{fontWeight: "bold", paddingBottom: 10, fontSize: 14}}>Personalized offers just for
                            you</Text>

                        {recommendations.map((rec, key) => <TouchableWithoutFeedback key={key}
                                                                                     onPress={() => navigation.navigate("Recommendation")}>
                            <View
                                style={{
                                    backgroundColor: COLORS.primary,
                                    borderRadius: 5,
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: 5,
                                    marginBottom: 10
                                }}>
                                <Image source={require('../assets/notification_pound.png')}
                                       style={{width: 26, height: 26}}/>
                                <Text style={{flex: 1, color: COLORS.white, paddingLeft: 10, fontSize: 14}}>{rec}</Text>
                            </View></TouchableWithoutFeedback>)}
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default Dashboard

