import React from "react";
import { View, StyleSheet } from "react-native";

import Temperature from "./contents/Temperature.js";
import Fine_dust from "./contents/Fine_dust.js";

function Temperature_Fine_dust() {
  return (
    <View style={styles.contents}>
      <View style={{ marginRight: 19 }}>
        <Temperature />
      </View>
      <Fine_dust />
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    flexDirection: "row",
  },
});

export default Temperature_Fine_dust;
