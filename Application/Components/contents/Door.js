import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Door() {
  return (
    <View>
      <Text style={styles.door_font}>문</Text>
      <View style={styles.door_border}>
        <Image
          source={require('../../assets/contents/door.png')}
          style={styles.door}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  door_border: {
    // 문 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  door: {
    // 문 사진
    width: 60,
    height: 70,
    marginLeft: 25,
    marginTop: 20,
  },
  door_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Door;
