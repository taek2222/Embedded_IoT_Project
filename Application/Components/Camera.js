import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header.js";

function CameraScreen() {
  return (
    <View style={style.Screen}>
      <Header />
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

export default CameraScreen;
