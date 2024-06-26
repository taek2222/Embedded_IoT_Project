import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import Bulb_1 from "./Bulb/Bulb_1.js";
import Bulb_2 from "./Bulb/Bulb_2.js";
import Bulb_3 from "./Bulb/Bulb_3.js";

function Bulb() { // LED 1, 2, 3 관리 및 ALL 제어
  const [isAllOn, setIsAllOn] = useState(false);

  // ALL ON 서버 통신
  const handleAllOn = async () => {
    try {
      const response = await fetch("http://172.20.10.3:5000/led/all/on", {
        method: "POST",
      });
      if (response.ok) {
        setIsAllOn(true);
      }
    } catch (error) {
      console.error("Error LEDs on:", error);
    }
  };

    // ALL OFF 서버 통신
  const handleAllOff = async () => {
    try {
      const response = await fetch("http://172.20.10.3:5000/led/all/off", {
        method: "POST",
      });
      if (response.ok) {
        setIsAllOn(false);
      }
    } catch (error) {
      console.error("Error LEDs off:", error);
    }
  };

  return ( // 전구 1, 2, 3 화면 표시 및 ALL 기능 버튼 
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

// 스타일 정의
const styles = StyleSheet.create({
  light_border: {
    width: 340,
    height: 220,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "column",
  },
  line: {
    height: "70%",
    marginVertical: 30,
    marginLeft: 14,
    width: 4,
    backgroundColor: "gray",
    borderRadius: 100,
  },
  buttonImage: {
    width: 140,
    height: 50,
    marginTop: 12,
    marginHorizontal: 6
  },
});

export default Bulb;
