import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Temperature() {
  return (
    <View>
      <Text style={styles.temperature_font}>실내 온도</Text>
      <View style={styles.temperature_border}>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/temperature.png",
          }}
          style={styles.temperature}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  temperature_border: {
    // 온도 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  temperature: {
    // 온도계 사진
    width: 70,
    height: 80,
    marginLeft: 5,
    marginTop: 33,
  },
  temperature_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Temperature;
