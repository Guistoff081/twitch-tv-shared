import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cafe from "./src/components/Cafe";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <View>
        <Cafe />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
