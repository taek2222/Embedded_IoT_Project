import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Hot_cold_fan() {
  return (
    <View>
      <Text style={styles.hc_fan_font}>냉온풍기</Text>
      <View style={styles.hc_fan_border}>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/fan.png",
          }}
          style={styles.hc_fan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hc_fan_border: {
    // 냉온풍기 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  hc_fan: {
    // 냉온풍기 사진
    width: 70,
    height: 70,
    marginLeft: 9,
    marginTop: 38,
  },
  hc_fan_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Hot_cold_fan;
