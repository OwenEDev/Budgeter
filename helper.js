import { StyleSheet } from "react-native";

const colourPalette = {
  primary: "#81B29A",
  secondary: "#F4F1DE",
  accent: "#E07A5F",
  background: "#3D405B",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colourPalette.background,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    color: colourPalette.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  navBar: {
    backgroundColor: colourPalette.primary,
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarText: {
    color: colourPalette.secondary,
    fontWeight: "bold",
    fontSize: 30,
  },
  numberInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colourPalette.secondary,
    padding: 10,
    backgroundColor: colourPalette.accent,
  },
});

export { styles, colourPalette };
