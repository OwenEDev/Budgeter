import { Button, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import { StatusBar } from "expo-status-bar";

export default function Breakdown({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breakdown</Text>
    </View>
  );
}
