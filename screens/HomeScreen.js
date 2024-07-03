import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={['red', 'lightgreen', 'pink', 'purple']}
      style={styles.container}
    >
      <Text style={styles.text}>Home Screen</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
