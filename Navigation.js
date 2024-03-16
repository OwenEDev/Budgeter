import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Breakdown from "./Breakdown";
import { styles } from "./helper";

const stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Breakdown"
        component={Breakdown}
        options={{
          title: "Budgeter",
          headerStyle: { backgroundColor: "#52557A" },
          headerTintColor: "#81B29A",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
    </stack.Navigator>
  );
}
