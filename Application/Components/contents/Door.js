import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

function Door() {
  const [doorStatus, setDoorStatus] = useState("닫힘"); // 문의 상태를 나타내는 상태 변수

  const getDoorStatusStyle = () => {
    return {
      ...styles.door_status,
      color: doorStatus === "열림" ? "green" : "red",
    };
  };

  const sendMotorControl = (action) => {
    fetch('http://172.20.10.3:6000/control_motor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      const actionResult = data.motor_action === "open" ? "열림" : "닫힘";
      const doorRealStatus = data.door_status === "open" ? "열림" : "닫힘";
      if (actionResult === doorRealStatus) {
        setDoorStatus(doorRealStatus);
      } else {
        // 모터의 동작과 실제 문의 상태가 일치하지 않는 경우
        Alert.alert("🚫 문상태 점검 🚫", " 통신 및 자동문 상태를 확인해주세요. ");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

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
            onPress={() => sendMotorControl("open")}
          >
            <Text style={styles.buttonText}>열기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => sendMotorControl("close")}
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
