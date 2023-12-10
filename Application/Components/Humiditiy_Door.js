import React from "react";
import { View, StyleSheet } from "react-native";

import Humidity from "./contents/Humid.js";
import Door from "./contents/Door.js";

function Humidity_Door() { // 습도 및 문 관련 화면 병합 표시
  return (
    <View style={styles.contents}>
      <View style={{ marginRight: 19 }}>
        <Humidity/>
      </View>
      <Door/>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  contents: {
    flexDirection: "row",
  },
});

export default Humidity_Door;
