import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EPassportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Passport Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
