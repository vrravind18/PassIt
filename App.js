import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console
  const handlePress = () => console.log("Text Pressed.")

  return (
    <SafeAreaView style={styles.container}>
      <Text number numberOfLines={1} onPress= {handlePress}>
        Hello world
      </Text>
      <Image source = {{
        uri: "https://picsum.photos/200/300",
        width: 200,
        height: 300}}/>
        {/* <Image source = {require("./assets/icon.png")}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
});