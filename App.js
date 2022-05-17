import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumberButton from './components/NumberButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start workinsg on your app!</Text>
      <StatusBar style="auto" />
      <NumberButton number="99"/>
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
