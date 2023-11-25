import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Temperature() {
  const [averageTemperature, setAverageTemperature] = useState(null);

  useEffect(() => {
    // 서버로부터 평균 온도 데이터를 가져옵니다.
    fetch('http://localhost:8080/api/weather/average/temperature')
      .then(response => response.json())
      .then(data => setAverageTemperature(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.Temperature_border}>
      <Image
        source={require("../../assets/contents/temperature.png")}
        style={styles.Temperature_image}
      />
      <Text style={styles.Temperature_font}> 온  도   :   {averageTemperature} °C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Temperature_border: {
    // 평균 온도 박스
    width: 280,
    height: 80,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Temperature_image: {
    // 평균 온도 이미지
    width: 50,
    height: 60,
    marginLeft: 25,
  },
  Temperature_font: {
    // 평균 온도 폰트
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Temperature;
