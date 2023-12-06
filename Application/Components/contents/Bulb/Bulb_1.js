import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Switch, Alert } from "react-native";

function Bulb_1({ isLedOn }) {
  const [ledState, setLedState] = useState(isLedOn);

  useEffect(() => {
    setLedState(isLedOn);
  }, [isLedOn]);

  const handleToggle = async () => {
    const action = ledState ? "off" : "on";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    try {
      const response = await fetch(
        `http://192.168.137.76:5000/led/17/${action}`,
        {
          method: "POST",
          signal: controller.signal,
        }
      );
      clearTimeout(timeoutId);

      const data = await response.json();

      if (data === 200 || data === 100) {
        setLedState(!ledState); // LED 상태 토글
      } else {
        console.error("Unexpected status code:", data);
      }
    } catch (error) {
      clearTimeout(timeoutId);
      Alert.alert("🚫 Error 🚫", "인터넷 연결 상태를 확인해주세요. [1. 전구]");
    }
  };

  return (
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
          1 전구 : {ledState ? "ON" : "OFF"}
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
    width: 80,
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

export default Bulb_1;
