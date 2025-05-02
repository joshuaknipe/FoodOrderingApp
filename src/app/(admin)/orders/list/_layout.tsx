import { Tabs, withLayoutContext } from "expo-router";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native";
import Colors from "@/constants/Colors";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigator() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <TopTabs
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: Colors.light.tint },
                    tabBarActiveTintColor: Colors.light.tint,
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <TopTabs.Screen 
                    name="index"
                    options={{
                        title: "Active"
                    }}
                />
                <TopTabs.Screen 
                    name="archive"
                    options={{
                        title: "Archive"
                    }}
                />
            </TopTabs>
        </SafeAreaView>
    );
}