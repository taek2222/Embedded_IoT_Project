import React from "react";
import { View } from "react-native";

import Header from "./header.js";
import Contents from "./Contents.js";

function HomeScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Header />
      <Contents />
    </View>
  );
}

export default HomeScreen;
