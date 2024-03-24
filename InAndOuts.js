/* eslint-disable react/react-in-jsx-scope */
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";

export default function InAndOuts() {
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>InAndOuts</Text>
      </ScrollView>
    </View>
  );
}
