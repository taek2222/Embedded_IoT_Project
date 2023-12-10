import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Switch, Alert } from "react-native";

function Bulb_3({ isLedOn }) {
  // 세 번째 LED
  const [ledState, setLedState] = useState(isLedOn);

  useEffect(() => {
    setLedState(isLedOn);
  }, [isLedOn]);

  const handleToggle = async () => {
    const action = ledState ? "off" : "on";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);


    // 서버 통신
    try {
      const response = await fetch(`http://172.20.10.3:5000/led/23/${action}`, {
        method: "POST",
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await response.json();

      // 200의 반환 값 ON & 100의 반환 값 OFF 성공
      if (data === 200 || data === 100) {
        setLedState(!ledState); // LED 상태 토글
      } else {
        console.error("Unexpected status code:", data);
      }
    } catch (error) {
      clearTimeout(timeoutId);
      Alert.alert("🚫 Error 🚫", "인터넷 연결 상태를 확인해주세요. [3. 전구]");
    }
  };

  return ( // 전구 3 화면 표시
    <View style={styles.light_box}>
      <Image
        source={
          ledState
            ? require("../../../assets/contents/light_on.png")
            : require("../../../assets/contents/light_off.png")
        }
        style={styles.light}
      />
      <View style={styles.control}>
        <Text style={styles.light_font}>
          3 전구 : {ledState ? "ON" : "OFF"}
        </Text>
        <Switch
          style={styles.toggle}
          onValueChange={handleToggle}
          value={ledState}
        />
      </View>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  light_box: {
    flexDirection: "column",
  },
  light: {
    width: 70,
    height: 70,
    marginLeft: 20,
    marginTop: 10,
  },
  toggle: {
    marginLeft: 30,
    marginTop: 5,
  },
  light_font: {
    width: 82,
    marginLeft: 14,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    marginLeft: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bulb_3;
