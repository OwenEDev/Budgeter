import { Button, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import { StatusBar } from "expo-status-bar";

export default function Breakdown({ navigation }) {
  //   return (
  //     <Button
  //       title="Go to in and outs"
  //       onPress={() => navigation.navigate("InAndOuts")}
  //     />
  //   );
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>test</Text>
    </View>
  );
}
