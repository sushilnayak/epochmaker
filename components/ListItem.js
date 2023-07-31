import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: "#f4f4f6",
        height: LIST_ITEM_HEIGHT,
    },
    name: {
        fontSize: 16,
    },
    pointsContainer: {
        borderRadius: 8,
        backgroundColor: "#44c282",
        padding: 8,
    },
    points: {
        color: "white",
        fontWeight: "bold",
    },
});

// export interface ListItem {
//     name: string;
//     points: string;
// }
//
// interface ListItemProps {
//     item: ListItem;
//     isLast: boolean;
// }

const ListItem = ({item, isLast}) => {
    const bottomRadius = isLast ? 8 : 0;
    return (
        <View
            style={[
                styles.container,
                {
                    borderBottomLeftRadius: bottomRadius,
                    borderBottomRightRadius: bottomRadius,
                },
            ]}
        >
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
                {item.name === 'Natwest Bank' &&
                    <Image source={require('../assets/nwb.png')} style={{width: 45, height: 43}}/>}
                {item.name === 'Barclays Bank' &&
                    <Image source={require('../assets/barclays.png')} style={{width: 45, height: 43}}/>}
                {item.name === 'HSBC' &&
                    <Image source={require('../assets/hsbc.png')} style={{width: 45, height: 43}}/>}
                {item.name === 'Currys' &&
                    <Image source={require('../assets/curry.png')} style={{width: 41, height: 43}}/>}
                <Text style={styles.name}>{item.name}</Text>
            </View>
            {/*<View style={styles.pointsContainer}>*/}
            {/*    <Text style={styles.points}>{item.amount}</Text>*/}
            <Text>£ {item.amount}</Text>
            {/*</View>*/}
        </View>
    );
};

export default ListItem;
