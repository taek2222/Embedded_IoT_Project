import React from "react";
import { View, StyleSheet } from "react-native";

import Bulb from "./contents/Bulb.js";
import Temperature from "./contents/Temperature.js";
import Fine_dust from "./contents/Fine_dust.js";
import Humidity from "./contents/Humid.js";
import Hot_cold_fan from "./contents/Hot_cold_fan.js";

function Contents() {
  return (
    <View>
      <Bulb />
      <View style={styles.contents}>
        <View style={{marginRight : 19}}>
          <Temperature />
        </View>
        <Fine_dust />
      </View>
      <View style={styles.contents}>
        <View style={{marginRight : 19}}>
        <Humidity/>
        </View>
      </View>
      <Hot_cold_fan/>
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    flexDirection: "row",
  },
});

export default Contents;
