import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Hot_cold_fan() {
  return (
    <View>
      <Text style={styles.hc_fan_font}>냉온풍기</Text>
      <View style={styles.hc_fan_border}>
        <Image
          source={require('../../assets/contents/fan.png')}
          style={styles.hc_fan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hc_fan_border: {
    // 냉온풍기 박스
    width: 340,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  hc_fan: {
    // 냉온풍기 사진
    width: 110,
    height: 110,
    marginLeft: 25,
    marginTop: 20,
  },
  hc_fan_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Hot_cold_fan;
