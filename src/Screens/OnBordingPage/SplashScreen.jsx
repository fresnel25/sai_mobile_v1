import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
      <Text style={styles.test}>Loading</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    test: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})