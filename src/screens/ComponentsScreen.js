import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "hi hello";

  return(
  <View>
    <Text style={styles.text}>Components Screen</Text>
    <Text >{greeting}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ComponentsScreen;
