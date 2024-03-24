/* eslint-disable react/react-in-jsx-scope */
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import NumberInput from "./components/numberInput";
import { View } from "react-native";

export default function Breakdown() {
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Starting Balance</Text>
        <NumberInput />
      </ScrollView>
    </View>
  );
}
