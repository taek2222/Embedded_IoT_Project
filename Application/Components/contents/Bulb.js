import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import Bulb_1 from "./Bulb/Bulb_1.js";
import Bulb_2 from "./Bulb/Bulb_2.js";
import Bulb_3 from "./Bulb/Bulb_3.js";

function Bulb() {
  const [isAllOn, setIsAllOn] = useState(false);

  const handleAllOn = async () => {
    try {
      const response = await fetch("http://192.168.137.34:5000/led/all/on", {
        method: "POST",
      });
      if (response.ok) {
        setIsAllOn(true);
      }
    } catch (error) {
      console.error("Error turning all LEDs on:", error);
    }
  };

  const handleAllOff = async () => {
    try {
      const response = await fetch("http://192.168.137.34:5000/led/all/off", {
        method: "POST",
      });
      if (response.ok) {
        setIsAllOn(false);
      }
    } catch (error) {
      console.error("Error turning all LEDs off:", error);
    }
  };

  return (
    <View style={styles.light_border}>
      <View style={{ flexDirection: "row" }}>
        <Bulb_1 isLedOn={isAllOn} />
        <View style={styles.line} />
        <Bulb_2 isLedOn={isAllOn} />
        <View style={styles.line} />
        <Bulb_3 isLedOn={isAllOn} />
      </View>
      <View style={{ flexDirection: "row" , marginLeft: 17}}>
        <TouchableOpacity onPress={handleAllOn}>
          <Image
            source={require("../../assets/contents/light_on_all.png")} // '전체 켜기' 버튼 이미지 경로
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAllOff}>
          <Image
            source={require("../../assets/contents/light_off_all.png")} // '전체 끄기' 버튼 이미지 경로
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  light_border: {
    // LED 박스
    width: 340,
    height: 220,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "column",
  },
  line: {
    height: "70%", // 선의 높이
    marginVertical: 30,
    marginLeft: 17,
    width: 4, // 선의 너비
    backgroundColor: "gray", // 선의 색
    borderRadius: 100,
  },
  buttonImage: {
    width: 140, // 적절한 크기로 조절
    height: 50, // 적절한 크기로 조절
    marginTop: 12,
    marginHorizontal: 6
  },
});

export default Bulb;
