/* eslint-disable react/react-in-jsx-scope */
import { styles } from "../helper";
import { Text } from "react-native";
import { View } from "react-native";
import NumberInput from "./numberInput";
// eslint-disable-next-line react/prop-types
export default function WeeklySection({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${title} (date)`}</Text>
      <Text style={styles.subTitle}>Spent</Text>
      <NumberInput />
    </View>
  );
}
