import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Temperature() { // 평균 값 데이터 표시
  const [averageTemperature, setAverageTemperature] = useState(null);

  useEffect(() => {
    // 서버로부터 평균 온도 데이터를 가져옵니다.
    fetch('http://172.20.10.2:8080/api/weather/average/temperature')
      .then(response => response.json())
      .then(data => setAverageTemperature(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return ( // 표시 데이터 화면
    <View style={styles.Temperature_border}>
      <Image
        source={require("../../assets/contents/temperature.png")}
        style={styles.Temperature_image}
      />
      <Text style={styles.Temperature_font}> 온  도   :   {averageTemperature} °C</Text>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  Temperature_border: {
    width: 280,
    height: 80,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Temperature_image: {
    width: 50,
    height: 60,
    marginLeft: 25,
  },
  Temperature_font: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Temperature;
