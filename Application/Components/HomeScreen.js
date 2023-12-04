import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header.js";
import Contents from "./Main_Contents.js";

function HomeScreen() {
  return (
    <View style={style.Screen}>
      <Header />
      <Contents />
    </View>
  );
}

const style = StyleSheet.create({
  Screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default HomeScreen;
