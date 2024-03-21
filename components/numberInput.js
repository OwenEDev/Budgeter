/* eslint-disable react/react-in-jsx-scope */

import { SafeAreaView, TextInput } from "react-native";
import { colourPalette, styles } from "../helper";
import { useState } from "react";

export default function NumberInput() {
  const [number, setNumber] = useState("");
  return (
    <SafeAreaView>
      <TextInput
        value={number}
        onChangeText={setNumber}
        style={styles.numberInput}
        keyboardType="numeric"
        cursorColor={colourPalette.secondary}
        enterKeyHint="done"
        // onEndEditing={calculate stuff}
      >
        hi
      </TextInput>
    </SafeAreaView>
  );
}
