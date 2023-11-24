import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Temperature() {
  return (
    <View style={styles.Temperature_border}>
      <Image
        source={require("../../assets/contents/temperature.png")}
        style={styles.Temperature_image}
      />
      <Text style={styles.Temperature_font}> 온도 : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Temperature_border: {
    // 평균 온도 박스
    width: 280,
    height: 80,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Temperature_image: {
    // 평균 온도 이미지
    width: 50,
    height: 60,
    marginLeft: 10,
  },
  Temperature_font: {
    // 평균 온도 폰트
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Temperature;
