import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Redux Essentials Example</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1,
  }
});

export default Navbar;