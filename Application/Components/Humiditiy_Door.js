import React from "react";
import { View, StyleSheet } from "react-native";

import Humidity from "./contents/Humid.js";
import Door from "./contents/Door.js";

function Humidity_Door() {
  return (
    <View style={styles.contents}>
      <View style={{ marginRight: 19 }}>
        <Humidity/>
      </View>
      <Door/>
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    flexDirection: "row",
  },
});

export default Humidity_Door;
