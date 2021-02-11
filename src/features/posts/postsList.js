import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <View style={styles.postExcerpt} key={post.id}>
      <Text>{post.title}</Text>
      <Text style={styles.postContent}>{post.content.substring(0, 100)}</Text>
    </View>
  ))

  return (
    <View style={styles.postsList}>
      <Text style={styles.title}>Posts</Text>
      {renderedPosts}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginBottom: 15
  },
  postsList: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#eee',
    marginTop: 40
  },
  postExcerpt: {
    marginBottom: 5
  },
  postContent: {
    marginLeft: 20
  }
});