import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, Switch, Alert } from "react-native";

function Bulb_1() {
  const [isLedOn, setIsLedOn] = useState(false);

  const handleToggle = async () => {
    const action = isLedOn ? "off" : "on";

    try {
      const response = await fetch(`http://192.168.137.34:5000/led/23/${action}`, {
        method: "POST",
      });
      const data = await response.json();

      if (data === 200 || data === 100) {
        setIsLedOn(!isLedOn); // LED 상태 토글
      } else {
        console.error("Unexpected status code:", data);
      }
    } catch (error) {
      Alert.alert("Error", "Cannot communicate with the server");
    }
  };

  return (
    <View style={styles.light_box}>
      <Image
        source={{
          uri: isLedOn
            ? "/Users/ohyeontaek/Embedded_IoT_Project/Application/assets/contents/light_on.png"
            : "/Users/ohyeontaek/Embedded_IoT_Project/Application/assets/contents/light_off.png",
        }}
        style={styles.light}
      />
      <View style={styles.control}>
        <Text style={styles.light_font}>3 전구 : {isLedOn ? "ON" : "OFF"}</Text>
        <Switch
          style={styles.toggle}
          onValueChange={handleToggle}
          value={isLedOn}
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
    // LED 전등 사진
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
    // LED 상태 글씨
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
