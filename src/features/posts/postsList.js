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
      <Text>Posts</Text>
      {renderedPosts}
    </View>
  )
}

const styles = StyleSheet.create({
  postLists: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'aqua'
  }
});