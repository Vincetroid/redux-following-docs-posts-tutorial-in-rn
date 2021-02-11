import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = newValue => setTitle(newValue)
  const onContentChanged = newValue => setContent(newValue)

  const onSavePostClicked = () => {
    console.log(title, content);
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <View>
      <Text style={styles.title}>Add a New Post</Text>
      <Text style={styles.postTitle}>Post Title</Text>
      <TextInput
        value={title}
        onChangeText={onTitleChanged}
        style={styles.textInput}
      />
      <Text style={styles.postContent}>Content</Text>
      <TextInput
        value={content}
        onChangeText={onContentChanged}
        style={styles.textInput}
      />
      <Button title="Save Post" onPress={onSavePostClicked} />
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