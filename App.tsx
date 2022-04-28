import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const screenWidth = window.screen.width;

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!AAA</Text>
      {screenWidth}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
