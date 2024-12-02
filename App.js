import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Profile from "./src/components/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
