import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Essentials Example</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  }
});

export default Navbar;