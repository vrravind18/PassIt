import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  TouchableHighlight, 
  Image, 
  Alert,
  SafeAreaView 
} from 'react-native';

export default function App() {
  console
  const handlePress = () => console.log("Text Pressed.")

  return (
    <SafeAreaView style={styles.container}>
      <Text number numberOfLines={1} onPress= {handlePress}>
        Hello React Native world
        <TouchableHighlight onPress={() => console.log("Image tapped")}>
            <Image source = {{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300}}/>
            {/* <Image source = {require("./assets/icon.png")}/> */}
        </TouchableHighlight>
      </Text>
      <Button 
        title="Click me"
        onPress={() => 
          Alert.alert("My title", "My msg", [
          { text: "Yes", onPress: () => console.log("Yes")}, 
          {text:"No", onPress: () => console.log("No")}
          ])
        }
      />
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