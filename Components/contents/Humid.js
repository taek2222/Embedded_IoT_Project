import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Humid() {
  return (
    <View>
      <Text style={styles.humidity_font}>실내 습도</Text>
      <View style={styles.humidity_border}>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/humidity.png",
          }}
          style={styles.humidity}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  humidity_border: {
    // 온도 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  humidity: {
    // 온도계 사진
    width: 70,
    height: 80,
    marginLeft: 5,
    marginTop: 33,
  },
  humidity_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Humid;
