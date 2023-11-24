import React from "react";
import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

import Bulb_1 from "./Bulb/Bulb_1.js";
import Bulb_2 from "./Bulb/Bulb_2.js";
import Bulb_3 from "./Bulb/Bulb_3.js";

function Bulb() {

  return (
      <View style={styles.light_border}>
        <View style={{flexDirection:"row"}}>
        <Bulb_1/>
        <View style={styles.line} />
        <Bulb_2/>
        <View style={styles.line} />
        <Bulb_3/>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  light_border: {
    // LED 박스
    width: 340,
    height: 150,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "column",
  },
  line: {
    height: '70%', // 선의 높이
    marginVertical: 30,
    marginLeft: 17,
    width: 4, // 선의 너비
    backgroundColor: 'gray', // 선의 색
    borderRadius: 100,
  },
});

export default Bulb;
