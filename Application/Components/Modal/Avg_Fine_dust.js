import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Fine_dust() {
  return (
    <View style={styles.Fine_dust_border}>
      <Image
        source={require("../../assets/contents/fine_dust.png")}
        style={styles.Fine_dust_image}
      />
      <Text style={styles.Fine_dust_font}>미세먼지 : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Fine_dust_border: {
    // 평균 미세먼지 박스
    width: 280,
    height: 80,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Fine_dust_image: {
    // 평균 미세먼지 이미지
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  Fine_dust_font: {
    // 평균 미세먼지 폰트
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Fine_dust;
