import { Button, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./helper";
import { StatusBar } from "expo-status-bar";

export default function InAndOuts({ navigation }) {
  //   return (
  //     <Button
  //       title="Go to in and outs"
  //       onPress={() => navigation.navigate("InAndOuts")}
  //     />
  //   );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>InAndOuts</Text>
    </View>
  );
}
