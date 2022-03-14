import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Users() {
  const Datas = useSelector((state) => state.getUser.Data)
  const API_URL = 'https://jsonplaceholder.typicode.com/comments'
  let dispatch = useDispatch()
  useEffect(() => async () => {
    try {
      const response = await axios.get(API_URL)
      console.log(response.data)
      dispatch(getUsers(response.data))
    } catch (err) {
      throw new Error(err)
    }
  })

  return (
    <ScrollView style={{ marginTop: 100 }}>
      {Datas.map((item) => (
        <View key={item.lenght} style={styles.Boxs}>
          <Text style={{ fontSize: 25 }}>{item.name}</Text>
          <Text>{item.titleJob}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Boxs: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})
