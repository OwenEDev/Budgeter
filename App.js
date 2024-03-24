/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import Breakdown from "./Breakdown";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InAndOuts from "./InAndOuts";
import { SafeAreaView } from "react-native";
import { styles } from "./helper";
import { Text } from "react-native";
import Settings from "./Settings";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.navBar}>
        <Text style={styles.navBarText}>Budgeter</Text>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen
          name="Breakdown"
          component={Breakdown}
          options={{
            tabBarStyle: { backgroundColor: "#F4F1DE" },
            tabBarIndicatorStyle: { backgroundColor: "#E07A5F" },
          }}
        />
        <Tab.Screen
          name="Ins and Outs"
          component={InAndOuts}
          options={{
            tabBarStyle: { backgroundColor: "#F4F1DE" },
            tabBarIndicatorStyle: { backgroundColor: "#E07A5F" },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarStyle: { backgroundColor: "#F4F1DE" },
            tabBarIndicatorStyle: { backgroundColor: "#E07A5F" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
