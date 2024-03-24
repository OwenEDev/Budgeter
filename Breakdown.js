/* eslint-disable react/react-in-jsx-scope */
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import NumberInput from "./components/numberInput";
import { View } from "react-native";

export default function Breakdown() {
  return (
    <View style={styles.parentContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>Starting Balance</Text>
        <NumberInput />
        <View style={styles.container2}>
          <Text style={styles.title}>{`Week 1 (date)`}</Text>
          <Text style={styles.title}>{`Week 2 (date)`}</Text>
          <Text style={styles.title}>{`Week 3 (date)`}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
