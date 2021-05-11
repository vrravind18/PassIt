import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";

import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LisitngScreens from "./app/screens/LisitngScreens";

export default function App() {
  return <LisitngScreens />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
