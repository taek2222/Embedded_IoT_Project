import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header.js";
import List_Contents from "./List_Contents.js";

function ListScreen() {
  return (
    <View style={style.Screen}>
      <Header />
      <List_Contents />
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

export default ListScreen;
