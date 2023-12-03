import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Door() {
  const [doorStatus, setDoorStatus] = useState("닫힘"); // 문의 상태를 나타내는 상태 변수

  const getDoorStatusStyle = () => {
    return {
      ...styles.door_status,
      color: doorStatus === "열림" ? "green" : "red",
    };
  };

  return (
    <View>
      <Text style={styles.door_font}>문</Text>
      <View style={styles.door_border}>
        <Image
          source={require("../../assets/contents/door.png")}
          style={styles.door}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDoorStatus("열림")}
          >
            <Text style={styles.buttonText}>열기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDoorStatus("닫힘")}
          >
            <Text style={styles.buttonText}>닫기</Text>
          </TouchableOpacity>
        </View>
        <Text style={getDoorStatusStyle()}>문 상태: {doorStatus}</Text>
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  door: {
    // 문 사진
    width: 50,
    height: 60,
    marginTop: 5,
  },
  door_font: {
    marginTop: 7,
    marginLeft: 76,
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonsContainer: {
    width: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  door_status: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default Door;
