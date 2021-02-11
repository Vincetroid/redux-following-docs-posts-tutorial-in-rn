import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import { PostsList } from './src/features/posts/postsList';
import store from './src/store/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar />
        <PostsList />
      </View>
    </Provider>
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