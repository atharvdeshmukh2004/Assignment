import { View, Text } from 'react-native'
import React from 'react'
import Home from "./(tabs)/Home"
import Pay from "./(tabs)/Pay"
export default function index() {
  return (
    <View>
          <Home />
          <Pay/>
          <Text>hiii</Text>
    </View>
  )
}