import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Humid() {
  const [averageHumidity, setAverageHumidity] = useState(null);

  useEffect(() => {
    // 서버로부터 평균 온도 데이터를 가져옵니다.
    fetch('http://172.20.10.2:8080/api/weather/average/humidity')
      .then(response => response.json())
      .then(data => setAverageHumidity(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.Humid_border}>
      <Image
        source={require("../../assets/contents/humidity.png")}
        style={styles.Humid_image}
      />
      <Text style={styles.Humid_font}> 습  도  :   {averageHumidity} %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Humid_border: {
    // 평균 습도 박스
    width: 280,
    height: 80,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Humid_image: {
    // 평균 습도 이미지
    width: 50,
    height: 60,
    marginLeft: 27,
  },
  Humid_font: {
    // 평균 습도 폰트
    marginLeft: 11,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Humid;
