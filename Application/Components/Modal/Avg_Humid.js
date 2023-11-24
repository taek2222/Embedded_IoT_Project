import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Humid() {
  return (
    <View style={styles.Humid_border}>
      <Image
        source={require("../../assets/contents/humidity.png")}
        style={styles.Humid_image}
      />
      <Text style={styles.Humid_font}> 습도 : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Humid_border: {
    // 평균 습도 박스
    width: 280,
    height: 80,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Humid_image: {
    // 평균 습도 이미지
    width: 50,
    height: 60,
    marginLeft: 10,
  },
  Humid_font: {
    // 평균 습도 폰트
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Humid;
