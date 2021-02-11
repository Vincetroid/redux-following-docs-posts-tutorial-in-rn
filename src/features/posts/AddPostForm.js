import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  return (
    <View>
      <Text style={styles.title}>Add a New Post</Text>
      <Text style={styles.postTitle}>Post Title</Text>
      <TextInput
        value={title}
        onChange={onTitleChanged}
        style={styles.textInput}
      />
      <Text style={styles.postContent}>Content</Text>
      <TextInput
        value={content}
        onChange={onContentChanged}
        style={styles.textInput}
      />
      <Button title="Save Post" />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17
  },
  textInput: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 20
  }
});