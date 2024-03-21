/* eslint-disable react/react-in-jsx-scope */
import { View } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import NumberInput from "./components/numberInput";

export default function Breakdown() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starting Balance</Text>
      <NumberInput />
    </View>
  );
}
